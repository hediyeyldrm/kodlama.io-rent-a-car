import { ColorsService } from './../../services/colors.service';
import { ColorsModel } from './../../models/ColorsModel';
import { BrandsModel } from './../../models/BrandsModel';
import { BrandsService } from './../../services/brands.service';
import { CarListModel } from './../../models/CarListModel';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarListService } from './../../services/car-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm!: FormGroup;
  carDetails: CarListModel[] = [];
  car!: CarListModel;
  brands!: BrandsModel[];
  colors!: ColorsModel[];
  carLists: CarListModel[] = [];
  carColorId: ColorsModel[] = [];
  constructor(
    private carListService: CarListService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private brandsService: BrandsService,
    private colorsService: ColorsService
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandsService.getBrands().subscribe((data) => {
      this.brands = data;
      this.activatedRoute.params.subscribe((params) =>
        this.getCarDetail(params['id'])
      );
    });
  }
  getCarDetail(id: number) {
    this.carListService.getCarDetail(id).subscribe((data) => {
      this.carDetails = data;
      this.getColors();
    });
  }
  getColors() {
    this.colorsService.getColors().subscribe((data) => {
      this.colors = data;
      this.getColorById(this.carDetails[0].colorId);
    });
  }
  getColorById(id: number) {
    this.colorsService.getColorById(id).subscribe((data) => {
      this.carColorId = data;
      this.createCarUpdateForm();
    });
  }
  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      brandId: [this.carDetails[0].brandId, Validators.required],
      model: [this.carDetails[0].model, Validators.required],
      year: [this.carDetails[0].year, [Validators.required, Validators.max(4)]],
      colorId: [this.carDetails[0].colorId, Validators.required],
      price: [
        this.carDetails[0].price,
        [Validators.required, Validators.min(0)],
      ],
      state: [this.carDetails[0].state, Validators.required],
      description: [this.carDetails[0].description, Validators.required],
      imagePath: [this.carDetails[0].imagePath, Validators.required],
    });
  }

  update(id: number): void {
    this.carListService
      .update(id, this.carUpdateForm.value)
      .subscribe(() => console.log('update'));
  }

  delete(data: any) {
    this.carLists = this.carLists.filter((x) => x !== data);
    this.carListService.delete(data).subscribe();
  }
}
