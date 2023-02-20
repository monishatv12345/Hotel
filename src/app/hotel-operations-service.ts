import { Injectable } from '@angular/core';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelOperationsService {
    hotelArr:Hotel[]=[];

  addHotel(hotelFromUser:Hotel){
    this.hotelArr.push(hotelFromUser); 
    console.log("Inside Hotel Service : Hotel Added "+hotelFromUser.hotelId);
    console.log(" Total Hotel Are :- "+this.hotelArr.length);
  }

  getHotelArr():Hotel[]
  {
    return this.hotelArr;
  }

  getHotelByNumber(searchHotelId:number):Hotel
  {
    let outputHotel:Hotel = new Hotel(0,'','','','','','','','');
    for(let i=0;i<this.hotelArr.length;i++)
    {
      let thisHotel:Hotel = this.hotelArr[i];
        if(thisHotel.hotelId == searchHotelId)
        {
          outputHotel = thisHotel;
          break;
        }
    }
    
    return outputHotel;
  }


  getHotelById(filterCategory:string):Hotel[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Hotel[] = [];

    this.hotelArr.forEach(h=>{
      if(h.location == filterCategory)
      {
        outputArr.push(h);
      }
      if(h.category==filterCategory){
        outputArr.push(h);
      }
    });

    return outputArr;
  }
  getHotelByRatings(filterCategory:string):Hotel[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Hotel[] = [];

    this.hotelArr.forEach(h=>{
      
      if(h.location==filterCategory && h.ratings>"4"){
        outputArr.push(h);
      }
    });

    return outputArr;
  }
  
  

}
