import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarListModel } from '../models/CarListModel';

@Injectable({
  providedIn: 'root',
})
export class CarListService {
  apiUrl = 'http://localhost:3000/car-list';
  constructor(private httpClient: HttpClient) {}

  getCarList(state: number): Observable<CarListModel[]> {
    return this.httpClient.get<CarListModel[]>(
      this.apiUrl + '?q&state=' + state
    );
  }

  getCarsByBrandId(id: number): Observable<CarListModel[]> {
    return this.httpClient.get<CarListModel[]>(
      this.apiUrl + '?q&brandId=' + id + '&state=1'
    );
  }

  getCarDetail(id: number): Observable<CarListModel[]> {
    return this.httpClient.get<CarListModel[]>(this.apiUrl + '?q&id=' + id);
  }

  // post metodu 2 parametreye ihtiyac duyar
  add(data: CarListModel): Observable<CarListModel> {
    return this.httpClient.post<CarListModel>(this.apiUrl, data);
  }

  update(id: number, data: CarListModel): Observable<CarListModel> {
    return this.httpClient.put<CarListModel>(this.apiUrl + '/' + id, data);
  }

  delete(data: any): Observable<CarListModel> {
    return this.httpClient.delete<CarListModel>(this.apiUrl + '/' + data.id);
  }
}
