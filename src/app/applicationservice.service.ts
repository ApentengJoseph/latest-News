import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationserviceService {

  constructor(public httpClient: HttpClient) { }

  getDeals(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/update');
  }
}