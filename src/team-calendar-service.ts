/* eslint-disable spaced-comment */
/* eslint-disable import/order */
import { Appointment } from './model/appointment';
import { readAppointments } from './read-appointments';
//import { readPhotos } from './read-photos';
//import { getDirectReports, getIndirectReports } from './read-reports';
import {readPersons} from './read-persons';
import { getDirectReports, getIndirectReports } from './read-reports';
import { splitAppointmentIntoDays } from './util/time-util';
import { Person } from './model/person';
//useful for the backend unit test
import cds from '@sap/cds';
const { SELECT } = cds.ql;

export function serviceHandler(srv: any): void {
  srv.on('READ', 'TeamCalendar', async req => {
    // enfore presence of key (for now)
    const year: number = req.data.year;

    if (!year) {
      req.reject(
        400,
        'No key found in the request URL! Please provide a key, e.g. by calling the endpoint like this: /TeamCalendar(2020).'
      );
    }

    try {
      const data = await readAppointments(year, srv);
      console.log(data);
      //return req.reply(50, null)
      return req.reply(data);
    } catch (error) {
      req.reject(
        500,
        'An error occured while trying to read appointments: ' + error.message
      );
    }
  });

/*   srv.on('READ', 'Photo', async req => {
    try {
      const data = await readPhotos(srv);
      return req.reply(data);
    } catch (error) {
      req.reject(
        500,
        'An error occurred while trying to read images: ' + error.message
      );
    }
  }); */

  srv.on('READ', 'LoggedUser', req => {
    const user = req.user; // Extract logged-in user from the request
    return {
        id: '',
        name: user.name,
        email: user.email,
        role: '' //user.roles.join(", "), // Combine roles into a string if needed
    };
});

 // Event handler for READ requests on the 'Person' entity
srv.on('READ', 'Person', async (req) => {
  try {
/*
    // Fetch direct reports
    const directReports = await getDirectReports(email);

    // Fetch indirect reports
    const indirectReports = await getIndirectReports(directReports);

    // Combine direct and indirect reports into a single response
    const allReports = [...directReports, ...indirectReports];

    // Map to the structure expected by the Person entity
    return allReports.map((report) => ({
      id: report.userId, // Example ID field
      name: report.firstName + ' ' + report.lastName,
      email: report.email,
      jobTitle: report.jobTitle,
      department: report.department, // Adjust as needed
    }));
  } catch (error) {
    console.error('Error handling READ for Person:', error);
    req.error(500, 'An error occurred while fetching person data.');
  }*/
    
    const users = await readPersons(srv);   
    console.log("test read persons " + users[0].location)
    var temp: Person[] = users.map((persons) => 
      ({
      ID: persons.ID, // Example ID field
      name: persons.name,
      sfsfID: persons.ID,
      username: persons.username,
      location: persons.location,
      role: persons.role,
      hLevel: 1,
      workscheduleCode: persons.workscheduleCode
    }));
    console.log("Show mee " + temp[0].workscheduleCode)
    return temp;
  } catch (error) {
    console.error('Error handling READ for Person:', error);
    req.error(500, 'An error occurred while fetching person data.');
  }
}); 

}
