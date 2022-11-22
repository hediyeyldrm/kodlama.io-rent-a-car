import { BrandsModel } from './../models/BrandsModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandFilter',
})
export class BrandFilterPipe implements PipeTransform {
  transform(value: BrandsModel[], brandFilterText: string): BrandsModel[] {
    brandFilterText = brandFilterText
      ? brandFilterText.toLocaleLowerCase()
      : null;
    return brandFilterText
      ? value.filter(
          (b: BrandsModel) =>
            b.name.toLocaleLowerCase().indexOf(brandFilterText) !== -1
        )
      : value;
  }
}
