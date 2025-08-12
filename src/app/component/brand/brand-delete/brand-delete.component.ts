import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../service/brand.service';

@Component({
  selector: 'app-brand-delete',
  standalone: true,
   imports: [CommonModule, HttpClientModule],
  templateUrl: './brand-delete.component.html',
  styleUrl: './brand-delete.component.scss'
})
export class BrandDeleteComponent implements OnInit{

  brands: any[] = [];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands() {
    this.brandService.getAllBrand().subscribe({
      next: (data) => {
        this.brands = data;
      },
      error: (error) => {
        console.error('Error loading Brand:', error);
      }
    });
  }

  deleteBrand(id: string) {
    if (confirm('Are you sure you want to delete this merchant?')) {
      this.brandService.deleteBrand(id)
      .subscribe({
        next: () => {
          this.brands = this.brands.filter(m => m.id !== id);
          alert('Brands deleted successfully!');
        },
        error: (err) => {
          console.error('Delete failed', err);
          alert('Failed to delete brands.');
        }
      });
    }
  }
}