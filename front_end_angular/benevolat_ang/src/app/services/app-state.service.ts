import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  //Attributs-----------------
  customerState : any = {
    totalCustomer : 0, 
    customers : []
  }

  productState : any = {
    totalProducts : 0, 
    products : []
  }
  //Constructor---------------
  //constructor() { }

  //Méthodes------------------
  updateCustomerState(updateState : any) {
    this.customerState = {...this.customerState, ...updateState};
  }

  updateProductState(updateproduct : any) {
    this.productState = {...this.productState, ...updateproduct};
  }

}
