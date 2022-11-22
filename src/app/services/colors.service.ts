import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColorsModel } from '../models/ColorsModel';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  apiUrl = 'http://localhost:3000/colors';
  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ColorsModel[]> {
    return this.httpClient.get<ColorsModel[]>(this.apiUrl);
  }
  getColorById(id: number): Observable<ColorsModel[]>  {
    return this.httpClient.get<ColorsModel[]>(this.apiUrl + '?id=' + id);
  }
}
