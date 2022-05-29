import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
  name: 'summary'
})

export class SummaryPipe implements PipeTransform{

  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }
    let actualLimit:number = (limit) ? limit : 100;
    return value.slice(0, actualLimit) + '...';
  }



}
