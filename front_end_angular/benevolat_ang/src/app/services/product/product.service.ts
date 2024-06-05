import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  host: string = "http://localhost:8085";

  constructor(private http : HttpClient) { }

  getProducts() : Observable<any> {
    return this.http.get<any>(`${this.host}/products`);
  }

  getProductByID(id : number) : Observable<any> {
    return this.http.get<any>(`${this.host}/products/${id}`);
  }

  addProduct(product : any ) : Observable<any> {
    return this.http.post(`${this.host}/product`, product);
  }

  deleteProduct(product_id : number ) : Observable<any> {
    return this.http.delete(`${this.host}/product/${product_id}`, );
  }

  updateProduct(product : any ) : Observable<any> {
    return this.http.put(`${this.host}/product/${product.ProductID}`,product );
  }
}
