import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit, OnDestroy {
  public userId: number;
  public errorMessage: string;
  public albums: any[] = [];

  private sub: any;

  constructor(private route: ActivatedRoute, public dataService: DataService) {}

  /**
   * Get the albums OnInit
   */
  ngOnInit() {
    this.getAlbums();
    this.sub = this.route.params.subscribe(params => {
       this.userId = +params['userId']; // (+) converts string 'userId' to a number
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Handle the dataService observable
   */
  getAlbums() {
    this.dataService.getAlbums()
      .subscribe(
        albums => this.albums = albums,
        error => this.errorMessage = <any>error
      );
  }
}
