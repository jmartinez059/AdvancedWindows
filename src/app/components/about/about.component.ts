import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { EmployeeInfoCard } from 'src/app/interfaces/EmployeeInfoCard';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  public employees: EmployeeInfoCard[];

  constructor(
    private readonly employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees() {
    this.employeeService.getEmployeeInfo().subscribe(resp => {
      this.employees = resp;
      console.log(this.employees);
    });
  }
}

