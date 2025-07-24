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
import { dateToString } from './util/time-util';

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
  const { workScheduleApi, workScheduleDayModelAssignmentApi} = ecTimeOffService();
  const from = moment.utc(`2025-03-08`);
  const to = moment.utc(`2025-12-31`);
  console.log("Testinggg?: "+ persons.workscheduleCode)
  
  let temp=  await workScheduleApi
    .requestBuilder()
    .getAll()
    .select(
      workScheduleApi.schema.EXTERNAL_CODE,
      workScheduleApi.schema.STARTING_DATE,
      workScheduleApi.schema.MDF_SYSTEM_EFFECTIVE_END_DATE,
      workScheduleApi.schema.USER_ID,
      workScheduleApi.schema.WORK_SCHEDULE_DAY_MODELS.select(
        workScheduleDayModelAssignmentApi.schema.DAY,
        workScheduleDayModelAssignmentApi.schema.DAY_MODEL,
        workScheduleDayModelAssignmentApi.schema.CATEGORY,
        workScheduleDayModelAssignmentApi.schema.HOURS_AND_MINUTES

      )//,
      //workScheduleApi.schema.PERIOD_MODEL
    )
    .filter(
      //employeeTimeApi.schema.TIME_TYPE.equals(timeType),
      workScheduleApi.schema.EXTERNAL_CODE.equals(persons.workscheduleCode)
    )
    .execute({ destinationName: 'hcm-SFCPART001533_BASIC' });    
    var initialdayID = ((moment.duration(from.diff(temp[0].startingDate)).asDays()) % temp[0].workScheduleDayModels.length)+1;


    var currentMoment = {moment: from, dayid: initialdayID} ;
    //console.log("SHocase " + temp[0].workScheduleDayModels.find((daymodel) => daymodel.day.toNumber() == 26).category)
    var workSchedules: Appointment[] = [];
    while(currentMoment.moment.isBefore(to)){
      workSchedules.push(({
        ID: temp[0].externalCode + currentMoment.moment.format("YYYY-MM-DD") + currentMoment.dayid,
        calendar_year: 2025,
        end_date: dateToString(currentMoment.moment), //"2025-03-21"
        end_time: temp[0].workScheduleDayModels.find((daymodel) => daymodel.day.toNumber() == currentMoment.dayid).category != "OFF" && persons.ID == "3000"? 
                  "17:00:00": null,
        info: temp[0].workScheduleDayModels.find((daymodel) => daymodel.day.toNumber() == currentMoment.dayid).dayModel? 
              temp[0].workScheduleDayModels.find((daymodel) => daymodel.day.toNumber() == currentMoment.dayid).dayModel : " ",
        person_ID: persons.ID,
        start_date: dateToString(currentMoment.moment), //"2025-03-21"
        start_time: temp[0].workScheduleDayModels.find((daymodel) => daymodel.day.toNumber() == currentMoment.dayid).category != "OFF" && persons.ID == "3000"? 
                     "08:00:00": null,
        status: "APPROVED",
        title: " ",
        type: "WS-" + temp[0].workScheduleDayModels.find((daymodel) => daymodel.day.toNumber() == currentMoment.dayid).category
      }))
      currentMoment.moment.add(1, 'd');
      if(currentMoment.dayid == temp[0].workScheduleDayModels.length) currentMoment.dayid = 1;
      else currentMoment.dayid++;
    }
    workSchedules.push(({
      ID: "publicholiday-ekkashowday" + Math.random().toString() ,
      calendar_year: 2025,
      end_date: "2025-08-13", //
      end_time: null,
      info: "Public Holiday",
      person_ID: persons.ID,
      start_date: "2025-08-13", //"2025-03-21"
      start_time: null,
      status: "APPROVED",
      title: "",
      type: "PUBLICHOLIDAY" 
    }))
    if(persons.ID == "3000"){
      workSchedules.push(({
        ID: "TEMPORARYTIME-Demo" + Math.random().toString() ,
        calendar_year: 2025,
        end_date: "2025-08-01", //
        end_time: "05:00:00",
        info: "LATE_SHIFT_730",
        person_ID: persons.ID,
        start_date: "2025-07-31", //"2025-03-21"
        start_time: "22:00:00",
        status: "APPROVED",
        title: "",
        type: "WS-DAY_MODEL" 
      }))
      console.log(workSchedules.length)
      workSchedules = workSchedules.filter(workSchedule => !(workSchedule.start_date === "2025-06-09" && workSchedule.type === "WS-DAY_MODEL"));
      workSchedules = workSchedules.filter(workSchedule => !(workSchedule.start_date === "2025-06-10" && workSchedule.type === "WS-DAY_MODEL"));
      workSchedules.push(({
        ID: "TEMPORARYTIME-Demo" + Math.random().toString() ,
        calendar_year: 2025,
        end_date: "2025-07-31", //
        end_time: "05:00:00",
        info: "LATE_SHIFT_730",
        person_ID: persons.ID,
        start_date: "2025-07-30", //"2025-03-21"
        start_time: "22:00:00",
        status: "APPROVED",
        title: "",
        type: "WS-DAY_MODEL" 
      }))
      console.log(workSchedules.length)
    }
    
    console.log("Show me the data " + workSchedules)
    return workSchedules;
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

