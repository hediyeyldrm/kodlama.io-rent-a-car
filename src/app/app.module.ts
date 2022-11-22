import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NaviComponent } from './layouts/navi/navi.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { ColorsComponent } from './components/colors/colors.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandsComponent,
    CarListComponent,
    CarDetailComponent,
    CarAddComponent,
    BrandAddComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    BrandFilterPipe,
    CarFilterPipe,
    ColorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
