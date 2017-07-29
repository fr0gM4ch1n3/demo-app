import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowComponent } from './show.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'show/:userId',
        component: ShowComponent,
        children: [
          { path: ':albumId', component: AlbumComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})

export class ShowRoutingModule {
}
