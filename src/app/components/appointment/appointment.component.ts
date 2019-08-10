import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { AlertMessage } from 'src/app/interfaces/AlertMessage';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as moment from 'moment';
import * as momentTz from 'moment-timezone';
import { AppointmentService } from 'src/app/services/appointment/appointment.servic';
import { AWWAppoointment } from 'src/app/interfaces/AWWAppoointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public appointmentDate: Date;
  public scheduleForDaySelected: AWWAppoointment[];
  public timeSlotAvailable = false;

  constructor(
    private readonly appointmentService: AppointmentService
  ) { }

  ngOnInit() {
  }

  public showSchedule(dateSelected: Date) {
    this.appointmentDate = dateSelected;
    this.appointmentService.getScheduleForDay(dateSelected).subscribe(data => {
      this.scheduleForDaySelected = data;
    });
    this.checkAvailabilityForDate(dateSelected);
  }

  public checkAvailabilityForDate(dateSelected: Date) {
    const lastAppointment = this.scheduleForDaySelected[this.scheduleForDaySelected.length - 1];
    const lastAppointmentStartTime = lastAppointment.startTime.split(' ')[0];
    let lastAppointmentStartTimeHours = +lastAppointmentStartTime.split(':')[0];
    if (lastAppointmentStartTimeHours < 5) {
      lastAppointmentStartTimeHours += 12;
    }
    const lastAppointmentStartTimeMins = +lastAppointmentStartTime.split(':')[1];
    const estimatedEndTime =
      lastAppointmentStartTimeHours + lastAppointmentStartTimeMins / 60 + lastAppointment.durrationInMinutes / 60;
     if (estimatedEndTime < 14) {
       this.timeSlotAvailable = true;
     }
  }
}
