import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Device} from "../interfaces/device";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) {
  }

  public getDevicesList(userId: number): Observable<Device[]> {
    return this.http.get<Array<Device>>('http://localhost:8443/device/getDevicesByUserId/' + userId);
  }

  public getDevice(deviceId: number): Observable<Device> {
    return this.http.get<Device>('http://localhost:8443/device/getDevice/' + deviceId);
  }

  public updateDevice(device: Device): Observable<Device> {
    return this.http.post<Device>('http://localhost:8443/device/updateDevice', device);
  }

}
