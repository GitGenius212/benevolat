import { ChangeDetectorRef, Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

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

constructor(private fb : FormBuilder, private productService: ProductService, private router : Router, 
){}

productFormGroup : FormGroup = this.fb.group({
  name : this.fb.control("", [Validators.required]), 
  price : this.fb.control(0, [Validators.required, Validators.min(1)]), 
  photo: null, 
  status : this.fb.control("Open this select menu", [Validators.required, this.notDefaultValueValidator("Open this select menu")]), 
});


get price() {
  return this.productFormGroup.get('price') as FormControl;
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


saveProduct() {
  const product = this.productFormGroup.value;
  //console.log("Product : " + JSON.stringify(product));

  this.productService.addProduct(product).subscribe({
    next : () => {
      console.log("Product Saved");
      this.router.navigateByUrl("/products")
    }, 
    error : (error ) => console.log(error)
  });

}



}
