import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Observable} from "rxjs";
import {ProductModel} from "../model/product.model";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${environment.token}`,
    'authority': environment.authority // এখানে authority যোগ করা
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProductService{
  createProduct(product: { id: null; productName: string; description: string; barCode: string; brandId: null; categoryId: null; purchasePrice: null; salesPrice: null; discountAmount: null; enabled: boolean; }) {
    throw new Error("Method not implemented.");
  }

  private saveProductUrl: string = environment.apiHost + '/products';
  private getAllProductUrl: string = environment.apiHost + '/products';


  constructor(private http: HttpClient) {}

  public saveProduct(productModel:ProductModel): Observable<any> {
    return this.http.post(this.saveProductUrl,productModel, httpOptions);
  }




}
