import { Component } from '@angular/core';
import { Room } from '../room';
import { RoomOperationsService } from '../room-operations-service';
import { ActivatedRoute,Route,Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  __roomService:RoomOperationsService;
  router:Router;

  allRoom:Array<Room>=[];
 


  constructor(roomService:RoomOperationsService,router:Router){
    this.__roomService=roomService;
    this.allRoom=this.__roomService.getRoomArr();
    this.router=router;
  }

  viewRoomDetails(rid:string)
  {
    
    this.router.navigate(['roomDetails',rid]);
  }
  

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allRoom = this.__roomService.getRoomById(filterValue);
  }

  getFilterMenu(filterValue:string){
    this.allRoom=this.__roomService.getRoomById(filterValue);
  }

  getFilterRatings(filterValue:string){
    this.allRoom=this.__roomService.getRoomByRatings(filterValue);

  }
}
