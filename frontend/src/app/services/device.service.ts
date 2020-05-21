import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Device} from "../interfaces/device";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) {
  }

  public getDevicesList(userId: number){
    return this.http.get('http://localhost:8443/device/getDevicesByUserId/' + userId);
  }

  public getDevice(deviceId: number){
    return this.http.get('http://localhost:8443/device/getDevice/' + deviceId);
  }

  public updateDevice(device: Device){
    return this.http.post('http://localhost:8443/device/updateDevice', device);
  }

}
