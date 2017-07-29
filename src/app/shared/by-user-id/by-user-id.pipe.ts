import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'byUserId'
})

export class ByUserIdPipe implements PipeTransform {
  transform(input: any[], userId: number): any[] {
    return input.filter(elem => elem.userId === userId);
  }
}
