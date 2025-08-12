import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrandService } from '../../../service/brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-save',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './brand-save.component.html',
  styleUrl: './brand-save.component.scss'
})
export class BrandSaveComponent {

    brandName: string = '';
    enabled: boolean = true;
    message: string = '';
    form: any;
    f: any;

  constructor(
    private brandService: BrandService, 
    private router:Router) {}


  saveBrand(): void {
    if (!this.brandName.trim()) {
      this.message = 'Brand name is required';
      return;
    }

 this.brandService.saveBrand(
      this.brandName, this.enabled
    ).subscribe({
        next: () => { 
          this.message = 'Brand saved successfully!';
          this.brandName = '';
          this.enabled = false;
          this.router.navigateByUrl('/brand-list');
        },
        error: (error: any) => {
          console.error('Error saving brand:', error);
          this.message = 'Failed to save brand.';
        }
      });
  }

    

}







