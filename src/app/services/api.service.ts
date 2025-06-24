import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api-netflix-clone-vgnv.onrender.com';

  constructor(private http: HttpClient) {}

  getFilmes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/filmes`);
  }

 
}
