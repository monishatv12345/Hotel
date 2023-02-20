import { Component } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelOperationsService } from '../hotel-operations-service';
import { ActivatedRoute,Route,Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  __hotelService:HotelOperationsService;
  router:Router;

  allHotel:Array<Hotel>=[];
 


  constructor(hotelService:HotelOperationsService,router:Router){
    this.__hotelService=hotelService;
    this.allHotel=this.__hotelService.getHotelArr();
    this.router=router;
  }

  viewHotelDetails(hid:string)
  {
    
    this.router.navigate(['hotelDetails',hid]);
  }
  

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allHotel = this.__hotelService.getHotelById(filterValue);
  }

  getFilterMenu(filterValue:string){
    this.allHotel=this.__hotelService.getHotelById(filterValue);
  }

  getFilterRatings(filterValue:string){
    this.allHotel=this.__hotelService.getHotelByRatings(filterValue);

  }
}
