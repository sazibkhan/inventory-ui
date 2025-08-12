import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Brand} from "../../../model/brand.model";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category.model";

@Component({
  selector:'app-category-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit{

  categorys: Category[] = [];
  errorMessage: string = '';
  router: any;

  constructor(private categoryService: CategoryService) {}



  ngOnInit(): void {
    this.loadBrands();
    }


  loadBrands() {
    this.categoryService.getAllCategory()
      .subscribe({
        next: (data) => {
          this.categorys = data;
          // alert(JSON.stringify(data));
        },
        error: (error) => {
          console.error('Error loading categorys', error);
          this.errorMessage = 'Failed to load categorys';
        }
      });
  }




  deleteCategory(id:any) {
    this.categoryService.deleteCategory(id)
      .subscribe(res=>{
        this.loadBrands();
      });
  }




}
