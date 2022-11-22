import { CarListModel } from './../models/CarListModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
})
export class CarFilterPipe implements PipeTransform {
  transform(value: CarListModel[], carFilterText: string): CarListModel[] {
    carFilterText = carFilterText ? carFilterText.toLocaleLowerCase() : null;
    return carFilterText
      ? value.filter(
          (c: CarListModel) =>
            c.model.toLocaleLowerCase().indexOf(carFilterText) !== -1
        )
      : value;
  }
}
