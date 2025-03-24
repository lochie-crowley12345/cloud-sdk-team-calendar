import { Person } from './model/person';
import { User, pltUserManagementService } from './generated/plt-user-management-service';
import moment from 'moment';
import { DefaultDeSerializers } from '@sap-cloud-sdk/odata-v2';
const { or, and } = require('@sap-cloud-sdk/odata-v2');

export async function readPersons(srv: any): Promise<Person[]> {
  
  const { userApi} = pltUserManagementService();
  const idRange = "'10000001'";
  //const filter = '$filter=userId in (' + idRange + ')';
  console.log("We have been id'd: " + idRange)
  console.log(srv)
  // Step 1: Fetch Users (without expand)
  let users: User<DefaultDeSerializers>[] = await userApi
    .requestBuilder()
    .getAll()//.addCustomQueryParameters({ filter: 'userId in ' + idRange})
    .select(userApi.schema.USER_ID, userApi.schema.USERNAME
    ).filter(or(userApi.schema.USERNAME.equals("VOICEM"),
                userApi.schema.USERNAME.equals("GWALKER"),
                userApi.schema.USERNAME.equals("FJOHNSON"),
                userApi.schema.USERNAME.equals("JHANSON"),
                userApi.schema.USERNAME.equals("KROBERTS")))
    // and(       userApi.schema.LOCATION.equals(site),       or(         userApi.schema.CUSTOM_06.equals('2A'),         userApi.schema.CUSTOM_06.equals('2B') ) ) )
    .execute({ destinationName: 'hcm-SFCPART001533_BASIC'});

  // Map the API response to the SFLoggedUser interface for multiple users
  const loggedUsers: Person[] = users.map(user => ({
    ID: user.userId,
    name: user.username,
    username: user.username,
    role: user.jobRole || "No Role",
    sfsfID: user.userId || "null",
    hLevel: 1
    }));
  // Return the array of loggedUsers
  return loggedUsers;
}
