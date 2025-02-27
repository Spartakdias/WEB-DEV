import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AlbumPhotosService {
  private photosUrl: string = 'https://jsonplaceholder.typicode.com/albums/1/photos';

  constructor(private http: HttpClient) {}

  getPhotos(){
    return this.http.get<any[]>(this.photosUrl);
  }
}