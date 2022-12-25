import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/models/search-item.model';

@Pipe({
  name: 'searchFor',
})
export class SearchForPipe implements PipeTransform {
  transform(value: any, searchValue: any, ...propNames: string[]) {
    const resultArray = [];

    for (let item of value) {
      for (let propName of propNames) {
        if (!item[propName]) continue;

        let type = typeof item[propName];

        if (type === 'string') {
          if (
            (<string>item[propName]).search(new RegExp(searchValue, 'ig')) != -1
          ) {
            resultArray.push(item);
            break;
          }
        }

        if (type === 'number') {
          if (item[propName] === Number(searchValue)) {
            resultArray.push(item);
            break;
          }
        }
      }
    }

    return resultArray.length < 1 ? value : resultArray;
  }
}
