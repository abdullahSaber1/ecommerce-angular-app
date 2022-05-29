import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products?:Iproduct[];
  isActive?:boolean;
  cartProducts:Iproduct[]=[];


  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=>{
      this.products = products;
    });
    this.productService.searchResult().subscribe(products=>{
    this.products = products;
    })

    this.productService.getCartStatus().subscribe((status)=>{
      this.isActive = status;
    })


  }

  addToCart(event:any){

  const isFounded:boolean = this.cartProducts.includes(event.product);
  if(!isFounded){
    this.cartProducts.push(event.product);
  }
    this.isActive = event.isActive;
  }

  closeCart(isActive:boolean){
    this.isActive = isActive;
  }

  clearCart(event:any){
   const isConfirm= confirm('Are you sure you want to clear your cart?');
    if(isConfirm)
    this.cartProducts =event.productsCart;
  }

}
