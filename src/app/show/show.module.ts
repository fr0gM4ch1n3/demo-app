import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { ShowRoutingModule } from './show-routing.module';
import { AlbumModule } from './album/album.module';
import { DataService } from '../shared/data/data.service';

@NgModule({
  imports: [ShowRoutingModule, CommonModule, AlbumModule],
  declarations: [ShowComponent],
  exports: [ShowComponent],
  providers: [DataService]
})

export class ShowModule { }
