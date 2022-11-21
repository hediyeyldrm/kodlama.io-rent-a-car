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
  constructor(
    private formBuilder: FormBuilder,
    private carListService: CarListService,
    private brandsService: BrandsService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getCarsBrands();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.max(4)]],
      color: ['', Validators.required],
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
}
