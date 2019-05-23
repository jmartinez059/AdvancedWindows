import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ServicesComponent } from './components/services/services.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ModalComponent } from './components/modal/modal.component';
import { ServiceInfoModalComponent } from './components/modal/service-info-modal/service-info-modal.component';
import { MatDialogModule, MatInputModule, MatButtonModule, MatFormFieldModule, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FrontPageComponent,
    ServicesComponent,
    AppointmentComponent,
    ContactComponent,
    AboutComponent,
    ModalComponent,
    ServiceInfoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ServiceInfoModalComponent,
    ModalComponent
  ]
})
export class AppModule { }
