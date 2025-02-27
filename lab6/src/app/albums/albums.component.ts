import {Component, OnInit} from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AlbumsService } from "./albums.service";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  standalone: true,
  imports: [HttpClientModule, NgForOf, NgIf, RouterModule, CommonModule]
})
export default class AlbumsComponent implements OnInit {
  albums: any[] = [];
  uniqueUserIds: number[] = [];

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.uniqueUserIds = this.getUniqueUserIds(this.albums);
    });
  }
  deleteAlbums(id: string): void {
    this.albums = this.albums.filter(item => item.id !== id);
  }
  getUniqueUserIds(albums: any[]): number[] {
    const userIds = albums.map(album => album.userId);
    return userIds.filter((userId, index) => userIds.indexOf(userId) === index);
  }
}