import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Device} from "../../interfaces/device";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-device-details',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {

  device: Device;
  deviceId: number;
  constructor(private route: ActivatedRoute, private router: Router, private deviceService: DeviceService) {
    this.route.params.subscribe(params => {
      this.deviceId = params['id'];
    });
    this.deviceService.getDevice(this.deviceId).subscribe(
      (res : Device) => {
        this.device = res;
      }
    );
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
  save() : void{
    this.deviceService.updateDevice(this.device);
    this.router.navigate(['/user/'+this.device.userId]);
  }
}
