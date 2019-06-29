import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInfoCard } from 'src/app/interfaces/EmployeeInfoCard';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EmailModalComponent } from '../modal/email-modal/email-modal.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public companyAddress: string;
  public companyPhoneNumber: string;
  public companyEmailAddress: string;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.companyAddress = '310 S. Nevada St.\nOceanside, Ca 92054';
    this.companyPhoneNumber = '(760)555-1234';
    this.companyEmailAddress = 'advanced.windows@aww.com';
  }

  public openEmailModal() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(EmailModalComponent);
  }
}
