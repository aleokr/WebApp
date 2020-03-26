import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  device1 = {
    id: 1,
    name: 'First Device',
    location: {
      address: 'Polna 8',
      city: 'Warszawa',
      country: 'Polska'
    }
  }
  device2 = {
    id: 2,
    name: 'Second Device',
    location: {
      address: 'Cicha 8',
      city: 'Warszawa',
      country: 'Polska'
    }
  }
  device3 = {
    id: 3,
    name: 'Third Device',
    location: {
      address: 'Jasna 8',
      city: 'Warszawa',
      country: 'Polska'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
