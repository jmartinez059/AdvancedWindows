import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private readonly HOME = 'home';
  private readonly SERVICES = 'services';
  private readonly APPOINTMENT = 'appointment';
  private readonly CONTACT = 'contact';
  private readonly ABOUT = 'about';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public navTo(page: string) {
    switch (page) {
      case this.HOME: {
        this.router.navigateByUrl(this.HOME);
        document.documentElement.scrollTop = 0;
        break;
      }
      case this.SERVICES: {
        this.router.navigateByUrl(this.SERVICES);
        document.documentElement.scrollTop = 0;
        break;
      }
      case this.APPOINTMENT: {
        this.router.navigateByUrl(this.APPOINTMENT);
        document.documentElement.scrollTop = 0;
        break;
      }
      case this.CONTACT: {
        this.router.navigateByUrl(this.CONTACT);
        document.documentElement.scrollTop = 0;
        break;
      }
      case this.ABOUT: {
        this.router.navigateByUrl(this.ABOUT);
        document.documentElement.scrollTop = 0;
        break;
      }
      default: {
        this.router.navigateByUrl(this.HOME);
        document.documentElement.scrollTop = 0;
      }
    }
  }

  public login() {
    // TODO - make this do login stuff login -> user name / logout
    console.log('login() called\nTODO - do login stuff');
    // check db for credentials
    // show user name and logout option
  }
}
