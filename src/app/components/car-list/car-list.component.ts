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

  constructor(
    private CarListService: CarListService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByBrandId(params['id']);
      } else {
        this.getCarList(params['state']);
      }
    });
  }

  getCarList(state: number) {
    this.CarListService.getCarList(state).subscribe(
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
}
