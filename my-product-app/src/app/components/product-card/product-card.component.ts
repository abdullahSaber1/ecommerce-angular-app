import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input('product') product?:Iproduct;
@Output('addToCart') addToCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  addCart(){
    this.addToCart.emit({product:this.product,isActive:true});
  }
}
