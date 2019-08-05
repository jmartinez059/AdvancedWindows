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
  }
}
