import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';

@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent,
    DeviceDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
