import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.css']
})
export class FavoriteProductComponent implements OnInit {
@Input('cartProducts') cartItems?:Iproduct[];
@Output('closeCart') isActive=new EventEmitter<boolean>();
@Output ('removeCart') remove=new EventEmitter();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  closeCart(){

    this.isActive.emit(false);

  }



  clearCart(){
    this.remove.emit({productsCart:[]})
  }



}
