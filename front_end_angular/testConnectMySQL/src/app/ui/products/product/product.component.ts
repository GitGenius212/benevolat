import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { AppStateService } from '../../../services/app-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  //Attributs
  products! : any[];

  //Constructor--------------------------------
  constructor(private productService : ProductService, public appState : AppStateService, 
    private router : Router
  ){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next : (data) => {
        this.products = data;
        //console.log("Data : " + data);
        data.forEach((donnee : any) => {
          //console.log(donnee);
        });
        this.appState.updateProductState({
          products : data
        });
      }, 
      error : (err) => {
        console.log(err);
      }
    });
  }

  gotoDetail(id : any) {
    console.log(id);
    this.router.navigateByUrl(`/detail-product/${id}`);
    }

  

}
