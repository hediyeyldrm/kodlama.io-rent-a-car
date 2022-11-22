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
  carFilterText: string = '';

  constructor(
    private CarListService: CarListService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByBrandId(params['id']);
      } else if (params['state']) {
        this.getCarList(params['state']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCarList(1);
      }
    });
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
