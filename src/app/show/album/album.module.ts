import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { DataService } from '../../shared/data/data.service';

import { ByAlbumIdPipe } from '../../shared/by-album-id/by-album-id.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AlbumComponent, ByAlbumIdPipe],
  exports: [AlbumComponent],
  providers: [DataService]
})

export class AlbumModule { }
