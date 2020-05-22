import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Device} from "../interfaces/device";
import {max} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) {
  }

  public getDevicesList(userId: number) {
    return this.http.get('http://localhost:8443/device/getDevicesByUserId/' + userId);
  }

  public getDevice(deviceId: number) {
    return this.http.get('http://localhost:8443/device/getDevice/' + deviceId);
  }

  public updateDevice(device: Device) {
    return this.http.post('http://localhost:8443/device/updateDevice', device, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).subscribe();
  }

  public addDevice(address: string, maxCapacity: number, isActive: boolean, userId: number) {
    console.log(address, maxCapacity, isActive);
    return this.http.post('http://localhost:8443/device/addDevice', {
      "id":0,
      "address":address,
      "maxCapacity": maxCapacity,
      "capacity": 0,
      "isActive": isActive,
      "userId": userId

    }).subscribe();
  }
  public deleteDevice(deviceId: number) {
    return this.http.delete('http://localhost:8443/device/deleteDevice/' + deviceId);
  }
}
