import { Component, OnInit } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import {InputTextModule} from 'primeng/inputtext';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';

export interface Recipient {
  name: string;
  email: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public subject: string;
  public emailFormGroup: FormGroup;
  public subjectFormControl: FormControl;
  public recipient: Recipient;
  public recipients: Recipient[];
  public tabOut: boolean;
  public invalidSubject: boolean;
  public text: string;
  disabled = true;
  msgs = [];


  constructor(
    private readonly emailFormBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.tabOut = false;
    this.invalidSubject = true;
    this.subject = '';
    this.text = '';
    this.recipient = { name: 'Jason', email: 'jason@me.com '};

    this.subjectFormControl = new FormControl('',
      { validators:
          Validators.compose([
            Validators.required
          ]),
          updateOn: 'blur'
      }
    );
  }

  public sendEmail() {
    console.log(this.subjectFormControl);
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  showWarn() {
    console.warn(this.subjectFormControl.value);
    this.msgs = [];
    this.msgs.push({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
  }
}
