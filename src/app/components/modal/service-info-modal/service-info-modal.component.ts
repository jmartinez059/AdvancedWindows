import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceDialogData } from 'src/app/interfaces/ServiceDialogData';

@Component({
  selector: 'app-service-info-modal',
  templateUrl: './service-info-modal.component.html',
  styleUrls: ['./service-info-modal.component.css']
})
export class ServiceInfoModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ServiceInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServiceDialogData) {}

  ngOnInit() {
  }

}
