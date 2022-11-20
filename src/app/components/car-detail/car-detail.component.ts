import { ActivatedRoute } from '@angular/router';
import { CarListModel } from './../../models/CarListModel';
import { CarListService } from './../../services/car-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetail: CarListModel[] = [];
  constructor(
    private carListService: CarListService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getCarDetail(params['id'])
    );
  }

  getCarDetail(id: number) {
    this.carListService
      .getCarDetail(id)
      .subscribe((data) => (this.carDetail = data));
  }
}
