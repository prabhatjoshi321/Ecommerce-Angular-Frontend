import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public sharedData:string;


  constructor() {
    this.sharedData = "String from service";
   }

  setData (data){
    this.sharedData = data;
  }
  getData (){
    return this.sharedData;
  }
}
