import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from "rxjs";
import {Device} from "../../interfaces/device";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  device: Device;
  deviceId: number;

  constructor(private route: ActivatedRoute, private router: Router, private deviceService: DeviceService) {
    this.route.params.subscribe(params => {
      this.deviceId = params['deviceId'];
    });
    this.deviceService.getDevice(this.deviceId).subscribe(
      (res: Device) => {
        this.device = res;
      }
    );
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  edit(deviceId : number): void {
    this.router.navigate(['/edit/device/'+deviceId]);
  }

  list(deviceId : number): void {
    this.router.navigate(['/products/'+deviceId]);
  }

}
