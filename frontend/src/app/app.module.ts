import { HousingService } from './services/housing.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    //
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
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
