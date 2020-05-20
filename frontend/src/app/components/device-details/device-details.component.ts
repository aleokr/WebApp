import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from "rxjs";
import {Device} from "../../interfaces/device";

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  device$: Observable<Device>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  edit(): void {
    this.router.navigate(['/edit/device']);
  }

  list(): void {
    this.router.navigate(['/products']);
  }

}
