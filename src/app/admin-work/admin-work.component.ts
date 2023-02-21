import { Component } from '@angular/core';
import { Room } from '../room';
import { RoomOperationsService } from '../room-operations-service';
@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {

  __roomService: RoomOperationsService;

  constructor(roomService: RoomOperationsService) {
    this.__roomService = roomService;
  }

  readRoom(roomId: string,
    hotelName: string,
    location: string,
    category: string,
    imageName: string,
    ratings: string,
    
    ) {
      console.log(roomId+""+hotelName+""+location+""+category+""+imageName+""+ratings);
      let roomFromUser:Room= new Room(parseInt(roomId),hotelName,location,category,imageName,ratings);
      this.__roomService.addRoom(roomFromUser);

  }
}
