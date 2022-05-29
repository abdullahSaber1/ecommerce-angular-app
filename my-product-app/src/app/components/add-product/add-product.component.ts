import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputValidator } from './Custom-Validator/cannotContain-space.validators';
import { ProductService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  seletedFile?:string;;
  categories:any[]=['category1','category2','category3','category4','category5'];
   img:string="https://picsum.photos/200/300?random=1";

   randomImage:string=`https://picsum.photos/200/300?random=${Math.ceil(Math.random() * 100)}`;

  myProdct=new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(3)]),
    description:new FormControl('',[Validators.required,Validators.minLength(10)]),
    price:new FormControl('',[Validators.required,Validators.min(0),
    InputValidator.cannotContainSpace]),
    category:new FormControl('',[Validators.required]),
    image:new FormControl(this.randomImage,[Validators.required])
  })

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {

  }

  get title(){
    return this.myProdct.get('title');
  }
  get price(){
    return this.myProdct.get('price');
  }

  get description(){
    return this.myProdct.get('description');
  }
   get category(){
    return this.myProdct.get('category');
  }
   get image(){
    return this.myProdct.get('image');
  }

  addProduct(){
    if(this.myProdct.valid){
    this.productService.setProudct(this.myProdct.value).subscribe(()=>{});
    this.router.navigate(['/products']);

    }
    else{
      this.myProdct.setErrors({
        invalid:true
      })
    }

  }

}
