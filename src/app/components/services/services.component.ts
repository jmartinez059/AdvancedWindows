import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/types/service';
import { MockData } from 'src/app/mock-data/mock-data';
import { MatDialog } from '@angular/material';
import { ServiceInfoModalComponent } from '../modal/service-info-modal/service-info-modal.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services: Service[];
  public mockServices = new MockData().services;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getServices();
  }

  public getServices() {
    this.services = this.mockServices;
    console.log('why');
  }

  public showDescription(service: Service) {
    console.log('service selected: ', service);
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ServiceInfoModalComponent, {
      data: { 'name': service.name, 'description': service.description }
    });
  }
}
