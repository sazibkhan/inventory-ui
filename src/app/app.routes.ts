import { Routes } from '@angular/router';
import { BrandSaveComponent } from './component/brand/brand-save/brand-save.component';
import { BrandListComponent } from './component/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from './component/brand/brand-update/brand-update.component';
import { BrandDeleteComponent } from './component/brand/brand-delete/brand-delete.component';

export const routes: Routes = [

    {path:'brand-save',component:BrandSaveComponent},
    {path:'brand-list',component:BrandListComponent},
    {path:'brand-update/:id',component:BrandUpdateComponent},



    {path: '', redirectTo: 'brand-save',pathMatch:'full'},

];
