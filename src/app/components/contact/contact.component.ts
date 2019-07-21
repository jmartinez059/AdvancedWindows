import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInfoCard } from 'src/app/interfaces/EmployeeInfoCard';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EmailModalComponent } from '../modal/email-modal/email-modal.component';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, NgForm} from '@angular/forms';

interface NewContact {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public companyAddress: string;
  public companyPhoneNumber: string;
  public companyEmailAddress: string;
  public newContact: NewContact;

  constructor(
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.companyAddress = '310 S. Nevada St.\nOceanside, Ca 92054';
    this.companyPhoneNumber = '(760)555-1234';
    this.companyEmailAddress = 'advanced.windows@aww.com';
  }

  public submitContactInfo(contactInfoForm: NgForm) {
    console.log(contactInfoForm.valid);
    console.log(contactInfoForm.value);
  }
}
