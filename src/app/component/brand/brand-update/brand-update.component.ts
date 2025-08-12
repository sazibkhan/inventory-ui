import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandService } from '../../../service/brand.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-update',
  standalone: true,
   imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './brand-update.component.html',
  styleUrl: './brand-update.component.scss'
})
export class BrandUpdateComponent {
  
  brandForm!: FormGroup;
  loading = false;
  errorMessage = '';
  bransId!: string;
  brandList: any;
  show!: boolean;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandService
  ) {}



 ngOnInit(): void {
    this.brandForm = this.fb.group({
      brandName: ['', [Validators.required, Validators.minLength(3)]],
      enabled: [true],
    });
this.bransId = this.route.snapshot.paramMap.get('id')!;
    this.brandService.getBrandUpdateById(this.bransId).subscribe({
      next: (res) => {
        this.brandList = res;
        this.load(); // ডেটা আসার পর ফর্ম আপডেট করো
      },
      error: (err) => {
        console.error('Failed to load merchant data', err);
      },
    });

 }

   load() {
    this.loading = true;
    if (this.brandList) {
      this.brandForm.patchValue({
        brandName: this.brandList.brandName,
        enabled: this.brandList.enabled,
      });
    }
    this.loading = false;
  }

  get f() {
    return this.brandForm.controls;
  }

onSubmit(): void {
    if (this.brandForm.invalid) {
      this.errorMessage = 'Please fix the errors in the form.';
      return;
    }
   const brandData = this.brandForm.value;

    this.brandService.updateBrand(
      this.bransId, 
      brandData.brandName, 
      brandData.enabled
    ).subscribe(res=>{
   // alert('Merchant updated successfully!');
    this.router.navigate(['/brand-list']);
    })
    
  }

  onCancel(): void {
    this.router.navigate(['/brans-update']);
  }


}
