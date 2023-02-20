import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelOperationsService } from '../hotel-operations-service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {

  __hotelService:HotelOperationsService; // creating object of Service layer
  router:Router;
  activeRoute:ActivatedRoute;
  h:Hotel = new Hotel(0,'','','','','','','','');
    constructor(hotelService:HotelOperationsService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__hotelService = hotelService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchHotelId= this.activeRoute.snapshot.params['hid']; // extract value from prameter(URI)
    console.log(searchHotelId);
    this.h = this.__hotelService.getHotelByNumber(parseInt(searchHotelId)); // get data from service class
    console.log(this.h);

}
}
