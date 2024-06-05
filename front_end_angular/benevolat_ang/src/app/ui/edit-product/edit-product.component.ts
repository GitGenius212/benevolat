import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {

  //Déclaration de variables-------
  product_id! : number;
  product : any;
  productFormGroup! : FormGroup;
  statusProduct : string[] = [
    'ELECTRONICS', 
    'FASHION', 
    'FOOD', 
    'HOME', 
    'HOBBIES', 
    'HEALTH_BEAUTY', 
    'AUTOMOTIVE', 
    'BOOKS_MEDIA', 
    'HOUSEHOLD_APPLIANCES', 
    'GAMES'
  ];
  imageUrl!: string | ArrayBuffer | null;
  image_type! : string;
  
  //Constructor--------------------
  constructor(private activatedRoute : ActivatedRoute, private router : Router, 
    private fb : FormBuilder, private productService: ProductService
  ){}
  ngOnInit(): void {
    this.product_id = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getProductByID(this.product_id).subscribe({
      next : (data) => {
        this.product = data
        //console.log(JSON.stringify(this.product));
        this.productFormGroup = this.fb.group({
          ProductID : this.fb.control(this.product_id, [Validators.required]),
          name : this.fb.control(this.product.name, [Validators.required]), 
          price : this.fb.control(this.product.price, [Validators.required, Validators.min(1)]), 
          photo: this.fb.control(this.product.photo),
          status : this.fb.control(this.product.type, [Validators.required, this.notDefaultValueValidator("Open this select menu")]), 
        });


      }, 
      error : (error) => {
        console.log(error);
      }
    });
  }

  //Methdes--------------------
  
  returnToPageProducts() {
    this.router.navigateByUrl("/products");
    }
  
  
  get price() {
    return this.productFormGroup.get('price') as FormControl;
  }

  get photo() {
    return this.productFormGroup?.get('photo') as FormControl;
  }
  
    notDefaultValueValidator(defaultValue: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === defaultValue ? { notDefaultValue: true } : null;
    };
  }
  
  
  
  
  
  
  onFileChange(event : any) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
            // console.log("reader.result : " + reader.result);
            const base64String = reader.result.split(',')[1];
            // const type = reader.result.split(',')[0].split(';')[0].split(':')[1];
            // const fileType  = file.type;
            // console.log("type : " + type);
            // console.log("" + base64String + "file_type :" + fileType);
            //Creating a Blob from a base64 string --------------------
            this.productFormGroup.patchValue({
              photo: reader.result
            });
            //-----------------------------------------------------
  
  
            //Sortie
             this.imageUrl = base64String;
             //console.log("imageUrl : " + this.imageUrl);
             
             
        }
        
      };
    }
  
  
  }
  
  
  updateProduct() {
    const product = this.productFormGroup.value;
    //console.log("Product : " + JSON.stringify(product));
    this.productService.updateProduct(product).subscribe({
        next : (updatedProduct) => {
          console.log("Product updated" + updatedProduct);
          this.router.navigateByUrl("/products");
        }, 
        error : (error) => {
          console.log(error);
        }
    });

  
  }

}
