import { CarListService } from './../../services/car-list.service';
import { ActivatedRoute } from '@angular/router';
import { BrandsModel } from './../../models/BrandsModel';
import { BrandsService } from './../../services/brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brands: BrandsModel[] = [];
  brandsName!: string;
  brandFilterText: string = '';

  constructor(
    private brandsService: BrandsService,
    private activatedRoute: ActivatedRoute,
    private carListService: CarListService
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandsService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }

  selectBrands(data: any) {
    this.brandsName = data.name;
    this.carListService.setSelectedBrand(data);
  }
}
