import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInfoCard } from 'src/app/interfaces/EmployeeInfoCard';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public owner: EmployeeInfoCard;

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  navTo(endpoint: string) {
    this.router.navigateByUrl(endpoint);
  }
}
