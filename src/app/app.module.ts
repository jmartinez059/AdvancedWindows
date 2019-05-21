import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { AWWRoutingModule } from './modules/router/router.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AWWRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
