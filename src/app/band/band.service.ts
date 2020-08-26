import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Band } from './band';

@Injectable({
  providedIn: 'root',
})
export class BandService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  get(): Observable<Band[]> {
    return this.http.get<Band[]>(`${this.apiUrl}/bands`);
  }

  async getById(id: number): Promise<Band> {
    const response = await fetch(`${this.apiUrl}/bands/${id}`);
    return await response.json();
  }
}
