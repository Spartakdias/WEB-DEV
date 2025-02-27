import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumDetailService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';


  constructor(private http: HttpClient) { }

  getDataById(id: string | undefined) {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums/' + id);
  }
}