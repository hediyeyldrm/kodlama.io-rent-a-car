import { BrandsModel } from './../../models/BrandsModel';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrandsService } from './../../services/brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'],
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm!: FormGroup;
  brands: BrandsModel[] = [];
  constructor(
    private brandsService: BrandsService,
    private formBuilder: FormBuilder,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
