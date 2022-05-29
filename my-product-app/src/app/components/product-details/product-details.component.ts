import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number=0;
  product?:Iproduct;
  constructor(private activeRouter: ActivatedRoute,private router:Router, private productService: ProductService) { }

  ngOnInit(): void {
    // this.productId = +this.router.url.split('/')[2];
    this.activeRouter.params.subscribe(params => {
      this.productId = +params['id'];
      this.productService.getProduct(this.productId).subscribe(product => {
        this.product = product;
      });
    })
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

}
