import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  host : string = "http://localhost:8085";
  constructor(private http : HttpClient) { }

getCustomers() : Observable<any>{
  return this.http.get<any>(`${this.host}/customers`);
}

getCustomerById(id : number) : Observable<any>{
  return this.http.get<any>(`${this.host}/customers/${id}`);
}

updateCustomer(customer : any) : Observable<any>{
  return this.http.put<any>(`${this.host}/edit-user/${customer.CustomerID}`, customer);
}

deleteCustomer(customer : any) : Observable<any>{
  return this.http.delete<any>(`${this.host}/delete-user/${customer.CustomerID}`);
}

addCustomer(customer : any) : Observable<any>{
  return this.http.post<any>(`${this.host}/new-customer`, customer);
}

}
