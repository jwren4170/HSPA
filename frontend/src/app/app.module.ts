import { AddPropertyComponent } from './property/add-property/add-property.component';
import { AppComponent } from './app.component';
// Components
import { AppRoutingModule } from './app-routing.module';
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BuyPropertyComponent } from './property/buy-property/buy-property.component';
// Services
import { HousingService } from './services/housing.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { RentPropertyComponent } from './property/rent-property/rent-property.component';

@NgModule({
  declarations: [
    //
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
    AddPropertyComponent,
    BuyPropertyComponent,
    RentPropertyComponent,
    PropertyDetailComponent,
  ],
  imports: [
    //
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
