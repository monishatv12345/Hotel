import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelOperationsService } from '../hotel-operations-service';

@Component({
  selector: 'app-tdfhotel-page',
  templateUrl: './tdfhotel-page.component.html',
  styleUrls: ['./tdfhotel-page.component.css']
})
export class TDFHotelPageComponent implements OnInit {

  __hotelService: HotelOperationsService; // creating object of Service layer
  h: Hotel = new Hotel(0, '', '', '', '', '', '', '', '');
  constructor(hotelService: HotelOperationsService) {
    this.__hotelService = hotelService;
    console.log(this.h);
  }

  ngOnInit() {

  }
  submitingHotel() {

    this.__hotelService.addHotel(this.h);
    console.log(this.h);

  }
}
