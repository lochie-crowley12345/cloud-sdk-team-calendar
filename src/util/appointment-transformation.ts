import { EmployeeTime } from '../generated/ec-time-off-service';
import { Photo } from '../generated/foundation-platform-plt-service';
import { Appointment } from '../model/appointment';
import { Person } from '../model/person';
import { Image } from '../model/photo';
import { S4AppointmentStatus } from '../model/s4-appointment-status';
import { dateToString, timeToString } from './time-util';

export function transformSfsfAppointment(
  eymployeeTime: EmployeeTime,
  person: Person,
  year: number
): Appointment {
  return {
    ID: eymployeeTime.externalCode,
    start_date: dateToString(eymployeeTime.startDate),
    start_time: timeToString(eymployeeTime.startTime),
    end_date: dateToString(eymployeeTime.endDate),
    end_time: timeToString(eymployeeTime.endTime),
    title: eymployeeTime.timeType,
    status: 'APPROVED',
    info: 'Retrieved from SAP SuccessFactors',
    person_ID: person.ID,
    calendar_year: year,
    // type: 'Project',
    type: eymployeeTime.timeType
  };
}

export function transformSfsfPhoto(
  photo: Photo,
  person: Person
): Image {
  return {
    person_ID: person.sfsfID,
    photo: photo.photo
  };
}