import {Component, OnInit} from '@angular/core';
import {Device} from "../../interfaces/device";
import {ActivatedRoute, Router} from "@angular/router";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  userId: number;

  constructor(private route: ActivatedRoute, private router: Router, private deviceService: DeviceService) {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  save(address: string, maxCapacity: number, isActive: boolean): void {
    this.deviceService.addDevice(address, maxCapacity, isActive, this.userId);
    this.router.navigate(['/user/' + this.userId]);
  }

}
