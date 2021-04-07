import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { PaymentComponent } from './components/payment/payment.component';

import {ToastrModule} from "ngx-toastr";
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { CarListComponent } from './components/car/car-list/car-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    VatAddedPipe,
    FilterBrandPipe,
    FilterColorPipe,
    FilterCarPipe,
    PaymentComponent,
    CarAddComponent,
    CarUpdateComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    BrandListComponent,
    ColorListComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }