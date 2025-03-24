import moment from 'moment';
import {
  EmployeeTime,
  ecTimeOffService
} from './generated/ec-time-off-service';
import { Appointment } from './model/appointment';
import { Person } from './model/person';
import { readPersons } from './read-persons';
import { transformSfsfAppointment } from './util/appointment-transformation';
import { convertCompilerOptionsFromJson } from 'typescript';

export async function readAppointments(
  year: number,
  srv: any,
  readSfsfAppointmentsByPersonFn = readSfsfAppointmentsByPerson,
): Promise<[{ year: number; appointments: Appointment[]}]> {
  console.log("API Has been called") 
  
  
  return readPersons(srv)
    .then(persons =>
      Promise.all([
        readWorkSchedules(srv)(persons),        
        readRemoteAppointments(
          readSfsfAppointmentsByPersonFn,
          transformSfsfAppointment
        )(persons, year)
      ])
    )
    .then(([ workSchedules, sfsfAppointments]) => [ 
      {
        year,
        appointments: [
          ...workSchedules,
          ...sfsfAppointments,
        ]
      }
    ]);
}

export async function readSfsfAppointmentsByPerson(
  person: Person,
  year: number
): Promise<EmployeeTime[]> {
  const timeType = 'VACATION';
  const approval = 'APPROVED';
  const personId = person.sfsfID;
  const from = moment.utc(`${year}-01-01`);
  const to = moment.utc(`${year}-12-31`);
  console.log("readinsfsfappointmentbyperson called");
  console.log(person.sfsfID + " User ID: " + person.ID)
  // TODO: Retrieve EmployeeTime from SAP SuccessFactors here. Use the above variables for filtering.
  //return [];
  const { employeeTimeApi } = ecTimeOffService();
  var temp=  employeeTimeApi
    .requestBuilder()
    .getAll()
    .select(
      employeeTimeApi.schema.EXTERNAL_CODE,
      employeeTimeApi.schema.START_TIME,
      employeeTimeApi.schema.START_DATE,
      employeeTimeApi.schema.END_TIME,
      employeeTimeApi.schema.END_DATE,
      employeeTimeApi.schema.APPROVAL_STATUS,
      employeeTimeApi.schema.USER_ID,
      employeeTimeApi.schema.TIME_TYPE
    )
    .filter(
      //employeeTimeApi.schema.TIME_TYPE.equals(timeType),
      employeeTimeApi.schema.APPROVAL_STATUS.equals(approval),
      employeeTimeApi.schema.USER_ID.equals(personId),
      employeeTimeApi.schema.START_DATE.greaterOrEqual(from),
      employeeTimeApi.schema.END_DATE.lessOrEqual(to)
    )
    .execute({ destinationName: 'hcm-SFCPART001533_BASIC' });    
    console.log("Output: SFSFappointmentbyPerson " + (await temp).length);
    //console.log(temp)
    return temp;
}
export async function readWorkSchedulewithPlannedHrs(persons: Person): Promise<Appointment[]> {
  const { workScheduleApi} = ecTimeOffService();
  const from = moment.utc(`2025-01-01`);
  const to = moment.utc(`2025-12-31`);
  console.log("Testinggg?: "+ persons.sfsfID)
  
  let temp=  await workScheduleApi
    .requestBuilder()
    .getAll()
    .select(
      workScheduleApi.schema.EXTERNAL_CODE,
      //workScheduleApi.schema.WORK_SCHEDULE_DAY_MODELS,
      workScheduleApi.schema.STARTING_DATE,
      workScheduleApi.schema.MDF_SYSTEM_EFFECTIVE_END_DATE,
      workScheduleApi.schema.USER_ID//,
      //workScheduleApi.schema.PERIOD_MODEL
    )
    .filter(
      //employeeTimeApi.schema.TIME_TYPE.equals(timeType),
      workScheduleApi.schema.USER_ID.equals(persons.sfsfID)
    )
    .execute({ destinationName: 'hcm-SFCPART001533_BASIC' });    
    console.log("Output: WorkSchedules " +  temp.length);
    console.log("Output Day Models: " +  temp[0]);

    if (temp.length == 0) return [];/*
    const WorkSchedules: Appointment[] = temp.map(WS => 
      WS.workScheduleDayModels.map(DayModel => ({ // set data type to be the Appointment[]
      ID: DayModel.entityUuid,
      calendar_year: 2025,
      end_date:  DayModel,
      end_time: " ",
      info: " ",
      person_ID: DayModel.userId,
      start_date: DayModel.startingDate.toString(),
      start_time: " ",
      status: "APPROVED",
      title: " ",
      type: "WS"
      })          // reduce the created WS' Day Model lists into a list of appointments  
    ).reduce( (WS) => [..WS, ]));*/
    //console.log(temp)
    return [];
}
export async function readWorkSchedulewithDayModel(persons: Person): Promise<Appointment[]> {
  const { workScheduleApi, workScheduleDayModelAssignmentApi } = ecTimeOffService();
  const from = moment.utc(`2025-01-01`);
  const to = moment.utc(`2025-12-31`);
  console.log("Testinggg: "+ persons)
  
  let temp=  await workScheduleApi
    .requestBuilder()
    .getAll()
    .select(
      workScheduleApi.schema.EXTERNAL_CODE,
      //workScheduleApi.schema.WORK_SCHEDULE_DAY_MODELS,
      workScheduleApi.schema.STARTING_DATE,
      workScheduleApi.schema.MDF_SYSTEM_EFFECTIVE_END_DATE,
      workScheduleApi.schema.USER_ID,
      workScheduleApi.schema.WORK_SCHEDULE_DAY_MODELS.select(
        workScheduleDayModelAssignmentApi.schema.DAY,
        workScheduleDayModelAssignmentApi.schema.MDF_SYSTEM_EFFECTIVE_START_DATE,
        workScheduleDayModelAssignmentApi.schema.MDF_SYSTEM_EFFECTIVE_END_DATE,
        workScheduleDayModelAssignmentApi.schema.WORK_SCHEDULE_EXTERNAL_CODE
      )
    )
    .filter(
      //employeeTimeApi.schema.TIME_TYPE.equals(timeType),
      workScheduleApi.schema.USER_ID.equals(persons.sfsfID)
    )
    .execute({ destinationName: 'hcm-SFCPART001533_BASIC' });    
    console.log("Output: WorkSchedules " +  temp.length);
    console.log("Output Day Models: " +  temp[0].workScheduleDayModels[1].day);
    console.log("Output Day Models: " +  temp[0].workScheduleDayModels[0].workScheduleExternalCode);
    console.log("Output Day Models: " +  temp[0].workScheduleDayModels[0].mdfSystemEffectiveEndDate.day());
    console.log("Output Day Models: " +  temp[0].workScheduleDayModels[0].mdfSystemEffectiveStartDate.date());

    if (temp.length == 0) return [];/*
    const WorkSchedules: Appointment[] = temp.map(WS => 
      WS.workScheduleDayModels.map(DayModel => ({ // set data type to be the Appointment[]
      ID: DayModel.entityUuid,
      calendar_year: 2025,
      end_date:  DayModel,
      end_time: " ",
      info: " ",
      person_ID: DayModel.userId,
      start_date: DayModel.startingDate.toString(),
      start_time: " ",
      status: "APPROVED",
      title: " ",
      type: "WS"
      })          // reduce the created WS' Day Model lists into a list of appointments  
    ).reduce( (WS) => [..WS, ]));*/
    //console.log(temp)
    return [];
}

function readRemoteAppointments<T>(
  readFn: (person: Person, year: number) => Promise<T[]>,
  transformFn: (appointment: T, person: Person, year: number) => Appointment
): (persons: Person[], year: number) => Promise<Appointment[]> {
  console.log("readingRemote called");
  var temp = (persons: Person[], year: number) =>
    Promise.all(
      persons.map(person =>
        readFn(person, year).then((appointments: T[]) =>
          appointments.map(appointment =>
            transformFn(appointment, person, year)
          )
        )
      )
    ).then((appointmentsByPerson: Appointment[][]) =>
      appointmentsByPerson.reduce(
        (allAppointments, appointmentsForOnePerson) => [
          ...allAppointments,
          ...appointmentsForOnePerson
        ],
        []
      )
    );
    console.log("Appointmentsss: ")
    return temp;
}

export async function readLocalAppointments(srv: any): Promise<Appointment[]> {
  return srv
    .read('Appointment')
    .then((appointments: Appointment[]) =>
      appointments.filter(appointment => appointment.status !== 'APPROVED')
    );
  }
function readWorkSchedules(
  persons: Person[]
): (persons: Person[]) => Promise<Appointment[]> {
  console.log("readingWS called");
  var temp = (persons: Person[]) =>
    Promise.all(
      persons.map(person =>
        readWorkSchedulewithPlannedHrs(person))
      ).then((workschedulesByPerson: Appointment[][]) => 
        workschedulesByPerson.reduce((allWSAppointments, WSappointmentsForOnePerson) => [
          ...allWSAppointments, 
          ...WSappointmentsForOnePerson],
          []));
    
    console.log("Appointmentsss: ");
    return temp;
}

