// data-fetching.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataFetchingService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    // Fetch data using HTTP client
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
