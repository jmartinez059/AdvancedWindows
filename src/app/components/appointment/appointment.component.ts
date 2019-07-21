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

export interface Recipient {
  name: string;
  email: string;
}

@Component({
  selector: 'app-apoointment',
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
    this.tabOut = false;
    this.invalidSubject = true;
    this.subject = '';
    this.body = '';
    this.text = '';
    this.recipient = { name: 'Jason Daniel Martinez', email: 'jason@me.com '};
    this.recipients = [this.recipient];
    this.emailFormControl = new FormControl('',
      { validators:
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]),
        updateOn: 'change'
      }
    );
    this.subjectFormControl = new FormControl('',
      { validators:
          Validators.compose([
            Validators.required
          ]),
          updateOn: 'blur'
      }
    );
    this.bodyFormControl = new FormControl('',
      { validators:
        Validators.required,
        updateOn: 'blur'
      }
    );
  }

  public isValidEmail(newEmail: string): boolean {
    const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
    const errorMessages = {
      'must_be_email': 'Please be sure to use a valid email format'
    };
    return EMAIL_REGEXP.test(newEmail);
  }

  public createRecipientAndAddToRecipients(addedItem: string) {
    this.recipients.pop();
    if (this.isValidEmail(addedItem)) {
      const newRecipient: Recipient = { name: null, email: addedItem};
      this.recipients.push(newRecipient);
    }
  }

  public getInitials(item: Recipient): string {
    let initials = '';
    if ( item.name !== null && item.name !== undefined && item.name !== '' ) {
      const names: string[] = item.name.split(' ');
      for (const name of names)  {
        initials = initials + name.charAt(0).toUpperCase();
      }
    } else {
      initials = item.email.charAt(0).toUpperCase();
    }
    return initials;
  }

  // public getBackgroundColor(): string {
  //   if (!this.emailFormBuilder.valid && this.emailFormBuilder.touched) {
  //     return 'white';
  //   } else {
  //     return 'f9020252';
  //   }
  // }

  public onTabOut() {
    console.log('onTabOut');
  }

  public onTabOutTextArea() {
    console.log('onTabOutTextArea');
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
