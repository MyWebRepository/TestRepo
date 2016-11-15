import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMany'
})
export class ToManyPipe implements PipeTransform {
  transform(value: string, count?: number): string {
    if (!count) count = 1;
    let result = "";

    for (let i = 0; i < count; i++) {
      result += value;
    }

    return result;
  }
}
