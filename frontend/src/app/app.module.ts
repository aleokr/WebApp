import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LoginComponent} from './login/login.component';
import {MainPageComponent} from './main-page/main-page.component';
import {DeviceDetailsComponent} from './device-details/device-details.component';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app/app.component';


@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent,
    DeviceDetailsComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'details', component: DeviceDetailsComponent},
      {path: '', component: LoginComponent},
      {path: 'user', component: MainPageComponent},
      {path: 'login', component: LoginComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
