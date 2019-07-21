import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { MockData } from 'src/app/mock-data/mock-data';
import { EmployeeInfoCard } from 'src/app/interfaces/EmployeeInfoCard';

class MockEmployeeService {
  constructor() { }

  getEmployeeInfo() {
    return of({});
  }
}

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let mockEmployeeService: EmployeeService;
  let mockEmployeeInfo: EmployeeInfoCard[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ],
      providers: [
        { provider: EmployeeService, useClass: MockEmployeeService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockEmployeeInfo = new MockData().employees;
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    mockEmployeeService = TestBed.get(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getEmployeeInfo', () => {

    it('should return an array of EmployeeInfoCard objects', () => {
      spyOn(mockEmployeeService, 'getEmployeeInfo').and.returnValue(mockEmployeeInfo);
      component.getEmployees();
      expect(component.employees).toEqual(mockEmployeeInfo)
    });
  });
});
