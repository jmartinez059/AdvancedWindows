import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDropdownComponent } from 'src/app/components/service-dropdown/service-dropdown.component';
import { AppComponent } from 'src/app/app.component';
import { FrontPageComponent } from 'src/app/components/front-page/front-page.component';

const routes: Routes = [
   { path: 'service/services', component: ServiceDropdownComponent, pathMatch: 'full' },
   { path: '', component: FrontPageComponent },
   { path: '/home', redirectTo: '', pathMatch: 'full' }
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
export class AWWRoutingModule { }
