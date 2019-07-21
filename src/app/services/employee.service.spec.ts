import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Service } from '../types/service';
import { MockData } from '../mock-data/mock-data';

fdescribe('EmployeeService', () => {
  const mockEmployeeInfo = new MockData().employees;
  let service: EmployeeService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getEmployeeInfo', () => {

    it('should make a GET call and return an array of EmployeeInfoCar objects', () => {
      service.getEmployeeInfo().subscribe(resp => {
        expect(resp).toEqual(mockEmployeeInfo);
      });
    });
  });
});
