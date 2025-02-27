import {Component, OnInit} from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterModule} from '@angular/router';
import {AlbumDetailService} from "./album-detail.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [HttpClientModule, NgForOf, NgIf, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})


export class AlbumDetailComponent implements OnInit {
  id: string | undefined;
  data: any;

  constructor(private route: ActivatedRoute, private AlbumDetailService: AlbumDetailService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadDataById(this.id);
    });
  }

  loadDataById(id: string | undefined): void {
    this.AlbumDetailService.getDataById(id).subscribe((data: any) => {
      this.data = data;
    });
  }

  saveChanges(album: any): void {
    console.log('Changes saved:', album);
  }
}