import { ColorsModel } from './../../models/ColorsModel';
import { ColorsService } from './../../services/colors.service';
import { CarListModel } from './../../models/CarListModel';
import { ActivatedRoute } from '@angular/router';
import { CarListService } from './../../services/car-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent implements OnInit {
  colors: ColorsModel[] = [];
  colorsName!: string;
  constructor(
    private colorsService: ColorsService,
    private activatedRoute: ActivatedRoute,
    private carListService: CarListService
  ) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorsService.getColors().subscribe((data) => (this.colors = data));
  }

  selectColor(data: any) {
    this.colorsName = data.colorName;
    this.carListService.setSelectedColor(data);
  }
}
