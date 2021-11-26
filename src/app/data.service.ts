import { Invoice } from './invoice';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Invoice[]> {
    return this.http.get("./assets/json/data.json") as Observable<Invoice[]>;
  }
}
