export class Hotel {
    hotelId:number;
    hotelName:string;
   location:string;
   hotelOwner:string;
   category:string;
   imageName:string;
   ratings:string;
   discription:string;
   contactNumber:string;

   constructor( hotelId:number,
    hotelName:string,
    location:string,
    hotelOwner:string,
    category:string,
    imageName:string,
    ratings:string,
    discription:string,
    contactNumber:string){

   this.hotelId=hotelId;
   this.hotelName=hotelName;
   this.location=location;
   this.hotelOwner=hotelOwner;
   this.category=category;
   this.imageName=imageName;
   this.ratings=ratings;
   this.discription=discription;
   this.contactNumber=contactNumber;

    }
}
