import { ColorsModel } from './../../models/ColorsModel';
import { ColorsService } from './../../services/colors.service';
import { BrandsService } from './../../services/brands.service';
import { BrandsModel } from './../../models/BrandsModel';
import { CarListService } from './../../services/car-list.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm!: FormGroup;
  carBrands: BrandsModel[] = [];
  carColors: ColorsModel[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private carListService: CarListService,
    private brandsService: BrandsService,
    private colorsService: ColorsService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getCarsBrands();
    this.getColors()
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.max(4)]],
      colorId: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      state: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: ['', Validators.required],
    });
  }

  // eğer carAddForm geçerliyse
  // observable'ın calismasi icin subscribe etmek gerekli
  add() {
    console.log(this.carAddForm.value);
    if (this.carAddForm.value) {
      let carInputDatas = Object.assign({}, this.carAddForm.value);
      this.carListService.add(carInputDatas).subscribe((response) => {
        console.log(response);
      });
    }
  }

  getCarsBrands() {
    this.brandsService.getBrands().subscribe((response) => {
      console.log(response);
      this.carBrands = response;
    });
  }

  getColors() {
    this.colorsService.getColors().subscribe((response) => {
      this.carColors = response;
    });
  }
}
