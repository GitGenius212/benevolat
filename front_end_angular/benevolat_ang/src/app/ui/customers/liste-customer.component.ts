import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { AppStateService } from '../../services/app-state.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-liste-customer',
  templateUrl: './liste-customer.component.html',
  styleUrl: './liste-customer.component.css'
})
export class ListeCustomerComponent implements OnInit{
  //Attributs-----------------------------------------
  customers! : any[];
  //Constructeur---------------------------------------
  ngOnInit(): void {
    this.getCustomers();
  }
  constructor(private customerService : CustomerService, public appState : AppStateService, 
    private router : Router
  ) {}

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next : (result) => {
        this.customers = result
        //console.log(this.customers);   //Test
        this.appState.updateCustomerState({
          customers : this.customers, 
          totalCustomer : this.customers.length
        });
      }, 
      error : (err) => {
        console.log(err);
      }
    });
  }

  handleDetailCustomer(customer: any) {
    this.router.navigateByUrl(`/detail-customer/${customer.CustomerID}`);
    }

    handleDelete(customer: any) {
      if(confirm("Are you sure ?")) {
        this.customerService.deleteCustomer(customer).subscribe({
          next : (result) => {
              this.customers = this.appState.customerState.customers.filter((c : any) => c.CustomerID != customer.CustomerID);
              //console.log("deleted" + this.customers);
              let length = this.appState.customerState.totalCustomer - 1;
              this.appState.updateCustomerState({
                customers : this.customers, 
                totalCustomer : length
              });

          }, 
          error : (err) => console.log(err)
        });
      }
      }

  handleEditCustomer(customer : any) {
      this.router.navigateByUrl( `/edit-customer/${customer.CustomerID}`);
  }
      routerLink=""

}
