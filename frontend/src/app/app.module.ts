import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LoginComponent} from './components/login/login.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {DeviceDetailsComponent} from './components/device-details/device-details.component';
import {RouterModule} from '@angular/router';
import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {EditDeviceComponent} from "./components/edit-device/edit-device.component";
import {EditProductComponent} from './components/edit-product/edit-product.component';
import {ProductsComponent} from './components/products/products.component';
import {DeviceService} from "./services/device.service";
import {FormsModule} from "@angular/forms";
import {AddDeviceComponent} from './components/add-device/add-device.component';
import {AddProductComponent} from './components/add-product/add-product.component';


@NgModule({
  declarations: [
    LoginComponent,
    MainPageComponent,
    DeviceDetailsComponent,
    AppComponent,
    EditDeviceComponent,
    EditProductComponent,
    ProductsComponent,
    AddDeviceComponent,
    AddProductComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'details/:deviceId', component: DeviceDetailsComponent},
      {path: '', component: LoginComponent},
      {path: 'user/:id', component: MainPageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'products/:deviceId', component: ProductsComponent},
      {path: 'edit/device/:id', component: EditDeviceComponent},
      {path: 'edit/product/:id', component: EditProductComponent},
      {path: 'user/:userId/addDevice', component: AddDeviceComponent},
      {path: 'device/:deviceId/addProduct', component: AddProductComponent}

    ]),
    FormsModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
