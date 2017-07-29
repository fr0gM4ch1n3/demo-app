import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { DataService } from '../../shared/data/data.service';

@NgModule({
  imports: [CommonModule],
  declarations: [AlbumComponent],
  exports: [AlbumComponent],
  providers: [DataService]
})

export class AlbumModule { }
