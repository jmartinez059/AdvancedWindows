import { Component, OnInit } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import {InputTextModule} from 'primeng/inputtext';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { SelectItem } from 'primeng/components/common/api';
import { headersToString } from 'selenium-webdriver/http';
import { AlertMessage } from 'src/app/interfaces/AlertMessage';
import { preserveWhitespacesDefault } from '@angular/compiler';
import * as moment from 'moment';
import * as momentTz from 'moment-timezone';

export interface Recipient {
  name: string;
  email: string;
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public subject: string;
  public body: string;
  public emailFormGroup: FormGroup;
  public subjectFormControl: FormControl;
  public emailFormControl: FormControl;
  public bodyFormControl: FormControl;
  public recipient: Recipient;
  public recipients: Recipient[];
  public tabOut: boolean;
  public invalidSubject: boolean;
  public text: string;
  noContentWarning: AlertMessage[];
  disabled = true;
  msgs: Message[];



  constructor(
    private readonly emailFormBuilder: FormBuilder,
    private readonly messageService: MessageService
  ) { }

  ngOnInit() {
  }
}
