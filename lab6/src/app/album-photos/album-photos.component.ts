import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {AlbumPhotosService} from "./album-photos.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    RouterModule
  ],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  data: any[] | undefined;

  constructor(private route: ActivatedRoute, private AlbumPhotosService: AlbumPhotosService) {
  }

  ngOnInit(): void {
    this.AlbumPhotosService.getPhotos().subscribe((data) => {
      this.data = data;
    });
  }

}
