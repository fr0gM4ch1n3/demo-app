import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data/data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit, OnDestroy {
  public albumId: number;
  public errorMessage: string;
  public photos: any[] = [];

  private sub: any;

  constructor(private route: ActivatedRoute, public dataService: DataService) {}

  /**
   * Get the photos OnInit
   */
  ngOnInit() {
    this.getPhotos();
    this.sub = this.route.params.subscribe(params => {
       this.albumId = +params['albumId']; // (+) converts string 'albumId' to a number
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Handle the dataService observable
   */
  getPhotos() {
    this.dataService.getPhotos()
      .subscribe(
        photos => this.photos = photos,
        error => this.errorMessage = <any>error
      );
  }
}
