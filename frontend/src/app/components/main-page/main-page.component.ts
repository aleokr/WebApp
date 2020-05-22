import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Device} from "../../interfaces/device";
import {DeviceService} from "../../services/device.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  devices: Device[] = [];
  userId: number;

  constructor(private route: ActivatedRoute, private router: Router, private deviceService: DeviceService) {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    this.deviceService.getDevicesList(this.userId).subscribe(
      (res: Device[]) => {
        this.devices = res;
      }
    );
  }

  ngOnInit(): void {

  }

  details(deviceId: number): void {
    this.router.navigate(['/details/' + deviceId]);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  addNew(): void {
    this.router.navigate(['/user/' + this.userId + '/addDevice']);
  }

  delete(deviceId: number): void {
    this.deviceService.deleteDevice(deviceId).subscribe();
    window.location.reload();
  }
}
