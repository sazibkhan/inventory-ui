import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";
import { Observable } from "rxjs";



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
export class BrandService {

    getBrands() {
    throw new Error('Method not implemented.');
  }

    private saveBrandUrl: string = environment.apiHost + '/brands';
    private getAllBrandUrl: string = environment.apiHost + '/brands';
    private getBrandByIdUrl: string = environment.apiHost + '/brands/{id}';
    private updateBrandUrl: string = environment.apiHost + '/brands/{id}';
    private deleteBrandUrl: string = environment.apiHost + '/brands/{id}';

    constructor(private http: HttpClient) {}

    public saveBrand(brandName: string, enabled: boolean): Observable<any> {
      return this.http.post(this.saveBrandUrl, { brandName, enabled }, httpOptions);
    }

    public getAllBrand(): Observable<any> {
      return this.http.get(this.getAllBrandUrl, httpOptions);
    }

    public getBrandUpdateById(id: string): Observable<any> {
      const url = this.getBrandByIdUrl.replace('{id}', id);
      return this.http.get(url, httpOptions);
    }

    public updateBrand(id: string, brandName: string, enabled: boolean): Observable<any> {
      const url = this.updateBrandUrl.replace('{id}', id);
      return this.http.put(url, { brandName, enabled }, httpOptions);
    }

    public deleteBrand(id: string): Observable<any> {
      const url = this.deleteBrandUrl.replace('{id}', id);
      return this.http.delete(url, {...httpOptions, responseType: 'text' as 'json' });
  }







}

