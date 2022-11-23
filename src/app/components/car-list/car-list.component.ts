import { ColorsModel } from './../../models/ColorsModel';
import { BrandsModel } from './../../models/BrandsModel';
import { CarFilterPipe } from './../../pipes/car-filter.pipe';
import { CarListService } from './../../services/car-list.service';
import { CarListModel } from './../../models/CarListModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  carLists: CarListModel[] = [];
  brands: BrandsModel[] = [];
  colors: ColorsModel[] = [];
  carFilterText: string = '';
  currentBrand: BrandsModel;
  currentColor: ColorsModel;

  constructor(
    private CarListService: CarListService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCars();
    });
  }

  getCars() {
    this.CarListService.getCars().subscribe((data) => (this.carLists = data));
  }

  getCarList(state: number) {
    this.CarListService.getCarList(state).subscribe(
      (data) => (this.carLists = data)
    );
  }

  getCarsByColorId(id: number) {
    this.CarListService.getCarsByColorId(id).subscribe(
      (data) => (this.carLists = data)
    );
  }

  getCarsByBrandId(id: number) {
    this.CarListService.getCarsByBrandId(id).subscribe(
      (data) => (this.carLists = data)
    );
  }

  clickDetail(data: any) {
    console.log(data);
  }

  delete(data: any) {
    this.carLists = this.carLists.filter((x) => x !== data);
    this.CarListService.delete(data).subscribe();
  }
}
