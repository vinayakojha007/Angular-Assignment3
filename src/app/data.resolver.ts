// data.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataFetchingService } from './dataService';

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<any> {
  constructor(private dataService: DataFetchingService) {}

  resolve(): Observable<any> {
    return this.dataService.fetchData();
  }
}
