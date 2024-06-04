import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit{
  //Déclaaration de variables---------------------------
  product_id! : number
  product : any;


  ngOnInit(): void {
    this.product_id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductByID(this.product_id).subscribe({
      next : product => {
          //console.log(product);
          this.product = product;
      }, 
      error : error => {
        console.log(error);
      }
    });
  }

  constructor(private productService : ProductService, private activatedRoute : ActivatedRoute, 
    private router : Router
  ) {}

  returtoProductPage() {
    this.router.navigateByUrl("/products");
  }

  deleteProduct(){
    if(confirm('Are you sure'))
    this.productService.deleteProduct(this.product_id).subscribe({
      next : () => { 
        console.log("Product deleted...");
        this.router.navigateByUrl("/products");
      }, 
      error : (error) => console.log(error)
    });
  }

  gotopageEdit(product: any) {
    this.router.navigateByUrl(`edit-product/${product.ProductID}`);
    }

}
