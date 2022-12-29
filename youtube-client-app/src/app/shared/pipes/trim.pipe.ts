import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
})
export class TrimPipe implements PipeTransform {
  transform(value: string, length: number = 15) {
    if (!value) {
      return value;
    }

    let newLineAmout = value.split('').reduce((prValue, curValue) => {
      if (curValue === '\n') prValue += 1;

      return prValue;
    }, 0);

    if (newLineAmout > 8) {
      length /= 1.5;
    }

    return value.length > length ? value.slice(0, length) + '...' : value;
  }
}
