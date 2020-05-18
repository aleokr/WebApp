import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LoginComponent} from './components/login/login.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {DeviceDetailsComponent} from './components/device-details/device-details.component';
import {RouterModule} from '@angular/router';
import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent,
    DeviceDetailsComponent,
    AppComponent
  ],
  imports: [
    HttpClientModule,
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
