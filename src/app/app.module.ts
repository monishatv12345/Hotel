import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { TDFHotelPageComponent } from './tdfhotel-page/tdfhotel-page.component';
import { UpcomingOffersComponent } from './upcoming-offers/upcoming-offers.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { DiscriptionPipe } from './discription-pipe';

const allLinks:Routes = [
  {path:'launchhotel',component:AdminWorkComponent},
  {path:'hotel',component:UserComponent},
  {path:'upcomingoffers',component:UpcomingOffersComponent },
  {path:'hotelDetails/:hid',component:HotelDetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    HotelDetailsComponent,
    TDFHotelPageComponent,
    UpcomingOffersComponent,
    DiscriptionPipe,
    UserComponent
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
