import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "../../../service/product.service";

@Component({
  selector: 'app-product-save',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-save.component.html',
  styleUrl: './product-save.component.scss'
})
export class ProductSaveComponent {

product = {
  id: null,
  productName: '',
  description: '',
  barCode: '',
  brandId: null,
  categoryId: null,
  purchasePrice: null,
  salesPrice: null,
  discountAmount: null,
  enabled: false
};

brands = [{id:1,brandName:"iphone"},];
categories =  [{id:1,categoryName:"Good"},];
message = '';

  constructor(
    private productService: ProductService, 
    private router:Router) {}


saveProduct() {
  // this.productService.createProduct(this.product).subscribe(res => {
  //   this.message = 'Product created successfully!';
  // });



}







}
