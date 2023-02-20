import { Component } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelOperationsService } from '../hotel-operations-service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {

  __hotelService: HotelOperationsService;

  constructor(hotelService: HotelOperationsService) {
    this.__hotelService = hotelService;
  }

  readHotel(hotelId: string,
    hotelName: string,
    location: string,
    hotelOwner: string,
    category: string,
    imageName: string,
    ratings: string,
    discription:string,
    contactNumber: string) {
      console.log(hotelId+""+hotelName+""+hotelOwner+""+location+""+category+""+imageName+""+ratings+""+discription+""+contactNumber);
      let hotelFromUser:Hotel= new Hotel(parseInt(hotelId),hotelName,location,hotelOwner,category,imageName,ratings,discription,contactNumber)
      this.__hotelService.addHotel(hotelFromUser);

  }
}
