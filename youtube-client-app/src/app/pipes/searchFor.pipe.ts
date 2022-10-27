import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../search/search-item.model';

@Pipe({
  name: 'searchFor',
})
export class SearchForPipe implements PipeTransform {
  transform(value: any, searchValue: any, ...propNames: string[]) {
    const resultArray = [];

    for (let item of value) {
      for (let propName of propNames) {
        if (!item[propName]) continue;

        switch (typeof item[propName]) {
          case 'string':
            if (
              (<string>item[propName]).search(new RegExp(searchValue, 'ig')) !=
              -1
            ) {
              resultArray.push(item);
              continue;
            }
            break;

          case 'number':
            if (item[propName] === Number(searchValue)) {
              resultArray.push(item);
            }
            break;
          default:
            break;
        }
      }
    }

    return resultArray;
  }
}
