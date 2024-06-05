import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent {

  customerFormGroup = this.fb.group({
    name : this.fb.control("", [Validators.required]), 
    lastName : this.fb.control("", [Validators.required]), 
    username : this.fb.control("", [Validators.required]), 
    password : this.fb.control("", [Validators.required]), 
    phone : this.fb.control("", [Validators.required]), 
    address : this.fb.control("", [Validators.required]), 

  });
  constructor(private fb : FormBuilder, private customerService : CustomerService, private router : Router) {}

  saveUser() {
    let customer : any = this.customerFormGroup.value;
    //console.log("Save customer");
    console.log(customer);
    this.customerService.addCustomer(customer).subscribe({
      next : (result) => {
        //console.log(result);
        this.router.navigateByUrl("customers");

      }, 
      error : (err) => {
        console.log(err);
      }
    });
  }

  returnPageCustomers() {
    this.router.navigateByUrl("customers");
    }

}
