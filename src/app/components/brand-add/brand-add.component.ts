import { BrandsService } from './../../services/brands.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  brandAddForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandsService
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm()
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    console.log(this.brandAddForm.value);
    this.brandsService
      .add(this.brandAddForm.value)
      .subscribe((response) => console.log(response));
  }
}
