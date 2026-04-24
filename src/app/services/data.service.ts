import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>('http://localhost:5018/api/items')
  }

  postItem(data: Item): Observable<Item>{
    return this.http.post<Item>('http://localhost:5018/api/items',data);
  }
}
