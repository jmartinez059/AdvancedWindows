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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { PhoneCallComponent } from './components/phone-call/phone-call.component';
import { EmailComponent } from './components/email/email.component';


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
    ServiceInfoModalComponent,
    PhoneCallComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {hasBackdrop: true}},
    MessageService,
    EmployeeService
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
