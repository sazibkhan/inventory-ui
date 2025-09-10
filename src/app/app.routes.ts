import { Routes } from '@angular/router';
import { BrandSaveComponent } from './component/brand/brand-save/brand-save.component';
import { BrandListComponent } from './component/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from './component/brand/brand-update/brand-update.component';
import {CategorySaveComponent} from "./component/category/category-save/category-save.component";
import {CategoryListComponent} from "./component/category/category-list/category-list.component";
import {CategoryUpdateComponent} from "./component/category/category-update/category-update.component";
import {ProductSaveComponent} from "./component/product/product-save/product-save.component";
import {RegistrationSaveComponent} from "./component/registration/registration-save/registration-save.component";

export const routes: Routes = [
     // brand
    {path:'brand-save',component:BrandSaveComponent},
    {path:'brand-list',component:BrandListComponent},
    {path:'brand-update/:id',component:BrandUpdateComponent},
     // category
     {path:'category-save',component:CategorySaveComponent},
     {path:'category-list',component:CategoryListComponent},
     {path:'category-update/:id',component:CategoryUpdateComponent},

     // product
     {path:'product-save',component:ProductSaveComponent},

    // registration
  {path:'reg-save',component:RegistrationSaveComponent},



    {path: '', redirectTo: 'brand-save',pathMatch:'full'},

];
