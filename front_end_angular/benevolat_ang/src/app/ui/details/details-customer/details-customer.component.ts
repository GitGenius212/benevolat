import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrl: './details-customer.component.css'
})
export class DetailsCustomerComponent implements OnInit{
  //Déclaaration de variables---------------------------
  customer_id! : number
  customer : any;
  //Constructor-----------------------------------------
  constructor(private activatedRoute : ActivatedRoute, private customerService : CustomerService, 
    private router : Router
  ){}

  ngOnInit(): void {
    this.customer_id = this.activatedRoute.snapshot.params['id'];
    this.customerService.getCustomerById(this.customer_id).subscribe({
      next : (result) => {
        this.customer = result[0];
        console.log(result[0]);
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
