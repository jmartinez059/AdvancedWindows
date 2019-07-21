import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInfoCard } from 'src/app/interfaces/EmployeeInfoCard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public owner: EmployeeInfoCard;

  constructor(
    private readonly employeeService: EmployeeService
  ) { }

  ngOnInit() {
  }
}
