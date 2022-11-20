import { BrandsModel } from './../models/BrandsModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  apiUrl = 'http://localhost:3000/brands';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<BrandsModel[]> {
    return this.httpClient.get<BrandsModel[]>(this.apiUrl);
  }

  add(data: BrandsModel): Observable<BrandsModel> {
    return this.httpClient.post<BrandsModel>(this.apiUrl, data);
  }
}
