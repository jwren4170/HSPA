import { RouterModule, Routes } from '@angular/router';

import { AddPropertyComponent } from './property/add-property/add-property.component';
import { BuyPropertyComponent } from './property/buy-property/buy-property.component';
import { NgModule } from '@angular/core';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { RentPropertyComponent } from './property/rent-property/rent-property.component';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'buy-property', component: BuyPropertyComponent },
  { path: 'rent-property', component: RentPropertyComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: '**', component: PropertyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
