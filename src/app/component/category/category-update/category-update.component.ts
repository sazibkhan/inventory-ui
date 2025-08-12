import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-brand-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.scss'
})
export class CategoryUpdateComponent implements  OnInit{

  categoryForm!: FormGroup;
  loading = false;
  errorMessage = '';
  categoryId!: string;
  categoryList: any;
  show!: boolean;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryName: ['', [Validators.required, Validators.minLength(3)]],
      enabled: [true],
    });
    this.categoryId = this.route.snapshot.paramMap.get('id')!;
    this.categoryService.getCategoryUpdateById(this.categoryId).subscribe({
      next: (res) => {
        this.categoryList = res;
        this.load(); // ডেটা আসার পর ফর্ম আপডেট করো
      },
      error: (err) => {
        console.error('Failed to load merchant data', err);
      },
    });

  }



  load() {
    this.loading = true;
    if (this.categoryList) {
      this.categoryForm.patchValue({
        categoryName: this.categoryList.categoryName,
        enabled: this.categoryList.enabled,
      });
    }
    this.loading = false;
  }

  get f() {
    return this.categoryForm.controls;
  }




  onSubmit(): void {
    if (this.categoryForm.invalid) {
      this.errorMessage = 'Please fix the errors in the form.';
      return;
    }
    const brandData = this.categoryForm.value;

    this.categoryService.updateCategory(
      this.categoryId,
      brandData.categoryName,
      brandData.enabled
    ).subscribe(res=>{
      // alert('Merchant updated successfully!');
      this.router.navigate(['/category-list']);
    })

  }

  onCancel(): void {
    this.router.navigate(['/category-update']);
  }



}
