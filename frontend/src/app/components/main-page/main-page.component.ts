import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Device} from "../../interfaces/device";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  allDevice$: Observable<Device>;

  constructor(private router: Router, private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.allDevice$ = this.deviceService.getDevicesList(1);
  }

  details(): void {
    this.router.navigate(['/details']);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}
