import { Injectable } from '@angular/core';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomOperationsService {
    roomArr:Room[]=[];

  addRoom(roomFromUser:Room){
    this.roomArr.push(roomFromUser); 
    console.log("Inside Room Service : Room Added "+roomFromUser.roomId);
    console.log(" Total Room Are :- "+this.roomArr.length);
  }

  getRoomArr():Room[]
  {
    return this.roomArr;
  }

  getRoomByNumber(searchRoomId:number):Room
  {
    let outputRoom:Room = new Room(0,'','','','','');
    for(let i=0;i<this.roomArr.length;i++)
    {
      let thisRoom:Room = this.roomArr[i];
        if(thisRoom.roomId == searchRoomId)
        {
          outputRoom = thisRoom;
          break;
        }
    }
    
    return outputRoom;
  }


  getRoomById(filterCategory:string):Room[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Room[] = [];

    this.roomArr.forEach(r=>{
      if(r.location == filterCategory)
      {
        outputArr.push(r);
      }
      if(r.category==filterCategory){
        outputArr.push(r);
      }
    });

    return outputArr;
  }
  getRoomByRatings(filterCategory:string):Room[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Room[] = [];

    this.roomArr.forEach(r=>{
      
      if(r.location==filterCategory && r.ratings>"4"){
        outputArr.push(r);
      }
    });

    return outputArr;
  }
}
