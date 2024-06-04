import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewCustomerComponent } from './ui/new-customer/new-customer/new-customer.component';
import { EditUserComponent } from './ui/editUser/edit-user/edit-user.component';
import { ListeCustomerComponent } from './ui/customers/liste-customer.component';
import { DetailsCustomerComponent } from './ui/details/details-customer/details-customer.component';
import { ProductComponent } from './ui/products/product/product.component';
import { DetailProductComponent } from './ui/detail-product/detail-product/detail-product.component';
import { AddProductComponent } from './ui/add-product/add-product.component';
import { EditProductComponent } from './ui/edit-product/edit-product.component';

const routes: Routes = [
  {path:'customers', component:ListeCustomerComponent}, 
  {path:'add-customer', component:NewCustomerComponent}, 
  {path:'detail-customer/:id', component:DetailsCustomerComponent}, 
  {path:'edit-customer/:id', component: EditUserComponent}, 
  {path:'products', component: ProductComponent},
  {path:'detail-product/:id', component: DetailProductComponent}, 
  {path:'add-product', component: AddProductComponent}, 
  {path:'edit-product/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
