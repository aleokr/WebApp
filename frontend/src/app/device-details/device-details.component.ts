import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automat-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  details = {
    count_of_products : 5,
    max_price : 10.5,
    min_price : 2,
    date_of_last_transaction: '26/03/2020'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
