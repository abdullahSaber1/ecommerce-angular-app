import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
  }

  changeActive(){
    this.productService.contolStatusCart();
    }

    searchProduct(text:string){
      this.productService.searchProduct(text);
    }

}
