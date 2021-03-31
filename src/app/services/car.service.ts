import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/car/carDetail';

@Injectable({
  providedIn: 'root',
})
export class CarService { 

  apiUrl = 'https://localhost:44358/api/';
   
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailByCarId(carId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath=this.apiUrl+"cars/getcardetailbycarid?carid="+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarListBrandIdColorId(brandId:number, colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/carlistbrandidcolorid?brandId="+brandId+'&colorId='+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}