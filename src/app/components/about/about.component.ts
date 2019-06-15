import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public emailAddress: string;
  public readonly emailInput = new FormControl(this.emailAddress,  { updateOn: 'blur' });

  constructor() { }

  ngOnInit() {
    this.emailAddress = 'jason.m@me.com';
  }


}
