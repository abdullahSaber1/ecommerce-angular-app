import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import productsData from '../data/products';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl: string = 'http://localhost:3005/products';

private subject=new Subject<any>();
private productSubject = new Subject<any>();

 products?:Iproduct[];
 isActive?:boolean;
 filterProducts?:Iproduct[];

  constructor(private httpClient:HttpClient) {
    this.isActive=false;
  }

  getProducts() {
    return this.httpClient.get<Iproduct[]>(this.baseUrl);
  }

  getProduct(id:number) {
   return this.httpClient.get<Iproduct>(`${this.baseUrl}/${id}`);
  }


  setProudct(product:Iproduct) {
  return  this.httpClient.post<Iproduct>(this.baseUrl,product);
  }

  contolStatusCart(){
    this.isActive=!this.isActive;
    this.subject.next(this.isActive);
  }

  getCartStatus():Observable<boolean>{
    return this.subject.asObservable();
  }


  searchProduct(text:string){

    if(text)
    this.getProducts().subscribe(products=>{
      this.filterProducts=products.filter(product=>product.title.toLowerCase().includes(text.toLowerCase()));
    })

    this.productSubject.next(this.filterProducts);


  }


  searchResult():Observable<Iproduct[]>{
    return this.productSubject.asObservable();
  }


}
