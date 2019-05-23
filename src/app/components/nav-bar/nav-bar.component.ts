import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public home() {
    // TODO - make this navaigate to home
    this.router.navigateByUrl('home');
  }

  public services() {
    this.router.navigateByUrl('services');
  }

  public book() {
    this.router.navigateByUrl('appointment');
  }

  public contact() {
    this.router.navigateByUrl('contact');
  }

  public about() {
    this.router.navigateByUrl('about');
  }

  public login() {
    // TODO - make this do login stuff login -> user name / logout
    console.log('login() called\nTODO - do login stuff');
    // check db for credentials
    // show user name and logout option
  }

}
