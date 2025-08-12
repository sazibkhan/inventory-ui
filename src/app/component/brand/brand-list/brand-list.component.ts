import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Brand } from '../../../model/brand.model';
import { BrandService } from '../../../service/brand.service';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.scss'
})
export class BrandListComponent implements OnInit{

  brands: Brand[] = [];
  errorMessage: string = '';
  router: any;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands() {
    this.brandService.getAllBrand()
    .subscribe({
      next: (data) => {
        this.brands = data;
        // alert(JSON.stringify(data));
      },
      error: (error) => {
        console.error('Error loading brands', error);
        this.errorMessage = 'Failed to load brands';
      }
    });
  }


addNewMerchants() {
    this.router.navigate(['/brand-save']);
  }


deleteBrand(id:any) {
  this.brandService.deleteBrand(id)
  .subscribe(res=>{
     this.loadBrands();
  });
}


}
