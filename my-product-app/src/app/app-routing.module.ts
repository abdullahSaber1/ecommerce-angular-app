import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'products' , component:ProductListComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
