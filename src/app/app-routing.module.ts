import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { ServicesComponent } from './components/services/services.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  // { path: 'service/services', component: ServicesComponent, pathMatch: 'full' },
  { path: '', component: FrontPageComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'services', component: ServicesComponent, pathMatch: 'full' },
  { path: 'appointment', component: AppointmentComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
