import { ColorsComponent } from './components/colors/colors.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarListComponent },
  { path: 'car-list', component: CarListComponent },
  { path: 'brands/:id', component: CarListComponent },
  { path: 'car-detail/:id', component: CarDetailComponent },
  { path: 'car-add', component: CarAddComponent },
  { path: 'brand-add', component: BrandAddComponent },
  { path: 'car-update/:id', component: CarUpdateComponent },
  { path: 'brand-update', component: BrandUpdateComponent },
  { path: 'car-color/:colorId', component: CarListComponent },
  { path: 'filter/:brandId/:colorId', component: CarListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
