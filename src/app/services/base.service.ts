import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor() {}

  public baseURL = 'http://localhost:3000';

  public createHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
}
