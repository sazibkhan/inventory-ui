import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${environment.token}`,
    'authority': environment.authority // এখানে authority যোগ করা
  })
};

@Injectable({providedIn:'root'})
export class CategoryService {

  private saveBrandUrl: string = environment.apiHost + '/categorys';
  private getAllCategoryUrl: string = environment.apiHost + '/categorys';
  private getCategorysByIdUrl: string = environment.apiHost + '/categorys/{id}';
  private updateCategoryUrl: string = environment.apiHost + '/categorys/{id}';
  private deleteCategoryUrl: string = environment.apiHost + '/categorys/{id}';




  constructor(private http: HttpClient) {}


  // Cave Category
  public saveCategory(categoryName: string, enabled: boolean): Observable<any> {
    return this.http.post(this.saveBrandUrl, { categoryName, enabled }, httpOptions);
  }
// get All Category
  public getAllCategory(): Observable<any> {
    return this.http.get(this.getAllCategoryUrl, httpOptions);
  }

  public getCategoryUpdateById(id: string): Observable<any> {
    const url = this.getCategorysByIdUrl.replace('{id}', id);
    return this.http.get(url, httpOptions);
  }


  public updateCategory(id: string, categoryName: string, enabled: boolean): Observable<any> {
    const url = this.updateCategoryUrl.replace('{id}', id);
    return this.http.put(url, { categoryName, enabled }, httpOptions);
  }

  public deleteCategory(id: string): Observable<any> {
    const url = this.deleteCategoryUrl.replace('{id}', id);
    return this.http.delete(url, {...httpOptions, responseType: 'text' as 'json' });
  }



}
