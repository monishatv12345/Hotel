export class Room {
    roomId:number;
    hotelName:string;
   location:string;
   category:string;
   imageName:string;
   ratings:string;
   
   

   constructor( roomId:number,
    hotelName:string,
    location:string,
    category:string,
    imageName:string,
    ratings:string,
    ){

   this.roomId=roomId;
   this.hotelName=hotelName;
   this.location=location;
   this.category=category;
   this.imageName=imageName;
   this.ratings=ratings;
   
   

    }
}
