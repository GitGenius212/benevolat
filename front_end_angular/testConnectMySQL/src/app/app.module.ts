import { NgModule } from '@angular/core';
import { BrowserModule,} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeCustomerComponent } from './ui/customers/liste-customer.component';
import { DetailsCustomerComponent } from './ui/details/details-customer/details-customer.component';
import { EditUserComponent } from './ui/editUser/edit-user/edit-user.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NewCustomerComponent } from './ui/new-customer/new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './ui/products/product/product.component';
import { DetailProductComponent } from './ui/detail-product/detail-product/detail-product.component';
import { AddProductComponent } from './ui/add-product/add-product.component';
import { EditProductComponent } from './ui/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCustomerComponent,
    DetailsCustomerComponent,
    EditUserComponent,
    NewCustomerComponent,
    ProductComponent,
    DetailProductComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
