import { Component } from '@angular/core';
import {HttpClientModule,} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {TopBarComponent} from "./top-bar/top-bar.component";
import AlbumsComponent from "./albums/albums.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, RouterModule, RouterLink, TopBarComponent, AlbumsComponent, AlbumsComponent],
  providers: [HttpClientModule]
})

export class AppComponent {
  title = 'lab6'
  constructor() {
  }
}