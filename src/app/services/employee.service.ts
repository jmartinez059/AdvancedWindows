import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeInfoCard } from '../interfaces/EmployeeInfoCard';
import { MockData } from 'src/app/mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employees: EmployeeInfoCard[];
  public mockEmployees = new MockData().employees;

  constructor(
    private readonly httpService: HttpClient
  ) { }

  public getEmployeeInfo(): Observable<EmployeeInfoCard[]> {
    this.employees = this.mockEmployees;
    this.httpService.get<EmployeeInfoCard>('<<<---some endpoint--->>>');
    return of(this.employees);
  }
}
