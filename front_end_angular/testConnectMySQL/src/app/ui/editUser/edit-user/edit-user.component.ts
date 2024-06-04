import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStateService } from '../../../services/app-state.service';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{

//Déclaration de variables------
  customer_id! : number;
  customer : any;
  customerFormGroup! : FormGroup;
  //Constructeur-------------------------
  constructor(private fb : FormBuilder, private router : Router, private activatedRoute : ActivatedRoute, 
   private  customerService : CustomerService
  ) {}
  ngOnInit(): void {
    this.customer_id = this.activatedRoute.snapshot.params['id'];
    this.customerService.getCustomerById(this.customer_id).subscribe({
      next : (result) => {
        this.customer = result[0];
        this.customerFormGroup = this.fb.group({
          CustomerID : this.fb.control(this.customer.CustomerID),
          name : this.fb.control(this.customer.name, [Validators.required]), 
          lastName : this.fb.control(this.customer.lastName, [Validators.required]), 
          username : this.fb.control(this.customer.username, [Validators.required]), 
          password : this.fb.control(this.customer.password, [Validators.required]), 
          phone : this.fb.control(this.customer.phone), 
          address : this.fb.control(this.customer.address, [Validators.required]), 
      
        });
      },
      error : (err) => {
        console.log(err);
      }
    });
  }
//Méthodes--------------------------------
returnPageCustomers() {
  this.router.navigateByUrl("/customers");
}

EditCustomer() {
  let updatecustomer = this.customerFormGroup.value;
  //alert(JSON.stringify(updatecustomer));
  //console.log(updatecustomer);
  this.customerService.updateCustomer(updatecustomer).subscribe({
    next : (result) => {
        console.log("Result : " + result.message);
        //alert(JSON.stringify(result));
        this.router.navigateByUrl("/customers");
    }, 
    error : (err) => {
      console.log("ERROR MESSAGE : " + err.message);
    } 
  });
  }

}
