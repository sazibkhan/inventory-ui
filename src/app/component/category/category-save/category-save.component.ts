import {Component} from "@angular/core";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@Component({
  selector:'app-category-save',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-save.component.html',
  styleUrl: './category-save.component.scss'
})
export class CategorySaveComponent {

  categoryName: string = '';
  enabled: boolean = true;
  message: string = '';
  form: any;
  f: any;


  constructor(
    private categoryService: CategoryService,
    private router: Router) {
  }


  saveCategory(): void {
    if (!this.categoryName.trim()) {
      this.message = 'Category name is required';
      return;
    }

    this.categoryService.saveCategory(
      this.categoryName, this.enabled
    ).subscribe({
      next: () => {
        this.message = 'Category saved successfully!';
        this.categoryName = '';
        this.enabled = false;
        this.router.navigateByUrl('/category-list');
      },
      error: (error: any) => {
        console.error('Error saving category:', error);
        this.message = 'Failed to save brand.';
      }
    });
  }

}


