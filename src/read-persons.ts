import { Person } from './model/person';
import { User, pltUserManagementService } from './generated/plt-user-management-service';
import moment from 'moment';
import { DefaultDeSerializers } from '@sap-cloud-sdk/odata-v2';
import { elevateJobInfoService } from './generated/elevate-job-info-service';
import { EmpJobApi } from './generated/elevate-job-info-service/EmpJobApi';
import { executeHttpRequest } from '@sap-cloud-sdk/http-client';
const { or, and } = require('@sap-cloud-sdk/odata-v2');
import { serviceToken } from '@sap-cloud-sdk/connectivity';

export async function readPersons(srv: any): Promise<Person[]> {
  
  const { userApi} = pltUserManagementService();
  const { empJobApi} = elevateJobInfoService();
  /* var test = await serviceToken('');
  console.log('svcjwt: ', test)
  try {
      const response = await executeHttpRequest(
          { destinationName: 'lcrowley' }, // Or directly provide URL/credentials
          {
              method: 'GET', // Or 'POST', 'PUT', 'DELETE'
              url: 'odatav4/timemanagement/timeeventprocessing/clockinclockout/v1/timeevents?'
          }
      );
      console.log('Response:', response.data);
      return response.data;
  } catch (error) {
      console.error('Error executing HTTP request:', error);
      throw error;
  }*/ 
  // Step 1: Fetch Users (without expand)
  let users: User<DefaultDeSerializers>[] = await userApi
    .requestBuilder()
    .getAll()//.addCustomQueryParameters({ filter: 'userId in ' + idRange})
    .select(userApi.schema.USER_ID, userApi.schema.USERNAME,
      userApi.schema.USER_ID, userApi.schema.FIRST_NAME,
      userApi.schema.USER_ID, userApi.schema.LAST_NAME,
      userApi.schema.LOCATION
    ).filter(or(userApi.schema.USER_ID.equals("103304"),
                userApi.schema.USER_ID.equals("3000"),
                userApi.schema.USER_ID.equals("3001"),
                userApi.schema.USER_ID.equals("3002"),
                userApi.schema.USER_ID.equals("3004")))
    // and(       userApi.schema.LOCATION.equals(site),       or(         userApi.schema.CUSTOM_06.equals('2A'),         userApi.schema.CUSTOM_06.equals('2B') ) ) )
    .execute({ destinationName: 'hcm-SFCPART001533_BASIC'});

  let userempjob = await empJobApi
  .requestBuilder()
  .getAll()//.addCustomQueryParameters({ filter: 'userId in ' + idRange})
  .select(empJobApi.schema.USER_ID, 
          empJobApi.schema.POSITION, 
          empJobApi.schema.WORKSCHEDULE_CODE
  ).filter(or(empJobApi.schema.USER_ID.equals("103304"),
              empJobApi.schema.USER_ID.equals("3000"),
              empJobApi.schema.USER_ID.equals("3001"),
              empJobApi.schema.USER_ID.equals("3002"),
              empJobApi.schema.USER_ID.equals("3004")))
  .execute({ destinationName: 'hcm-SFCPART001533_BASIC'});
  // and(       userApi.schema.LOCATION.equals(site),       or(         userApi.schema.CUSTOM_06.equals('2A'),         userApi.schema.CUSTOM_06.equals('2B') ) ) )
  

  var PositionMapping = [({
    ID: "3002181",
    PositionTitle: "Site Manager (3002181)"
  }),
  ({
    ID: "3002179",
    PositionTitle: "Utility Manager (3002179)"
  }),
  ({
    ID: "3002183",
    PositionTitle: "All Round Operator (3002183)"
  }),
  ({
    ID: "3002185",
    PositionTitle: "Dump Truck Operator (3002185)"
  }),
  ({
    ID: "3002134",
    PositionTitle: "Project Manager (3002134)"
  }),

]
  console.log("Empjob: " + userempjob);
  console.log("Empjob: " + userempjob.find((element) => element.userId == "3001").workscheduleCode);
  // Map the API response to the SFLoggedUser interface for multiple users
  const loggedUsers: Person[] = users.map(user => ({
    ID: user.userId,
    name: user.firstName + " " + user.lastName,
    username: user.username,
    location: user.location,
    role: PositionMapping.find(posid => (userempjob.find((element) => element.userId == user.userId).position) == posid.ID).PositionTitle,
    sfsfID: user.userId,
    hLevel: 1,
    workscheduleCode: userempjob.find((element) => element.userId == user.userId).workscheduleCode
    }));
    console.log("test users: " + loggedUsers)
  // Return the array of loggedUsers
  return loggedUsers;
}


