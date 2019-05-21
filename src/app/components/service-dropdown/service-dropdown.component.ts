import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/types/service';

@Component({
  selector: 'app-service-dropdown',
  templateUrl: './service-dropdown.component.html',
  styleUrls: ['./service-dropdown.component.css']
})
export class ServiceDropdownComponent implements OnInit {

  public services: Service[] = [];

  constructor() { }

  ngOnInit() {
    this.getServices();
  }

  private getServices() {
    this.services = [{ 'id' : 1, 'name' : 'Window Washing', 'description' : 'Blah blah blah' },
              { 'id' : 2, 'name' : 'Pressure Washing', 'description' : 'Some description' },
              { 'id' : 3, 'name' : 'Rain Gutters', 'description' : 'Some other description' }];
  }
}
