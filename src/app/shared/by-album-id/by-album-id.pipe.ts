import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'byAlbumId'
})

export class ByAlbumIdPipe implements PipeTransform {
  transform(input: any[], albumId: number): any[] {
    return input.filter(elem => elem.albumId === albumId);
  }
}
