import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchItems: SearchItem[] = [
    {
      id: '1',
      name: 'Video #1',
      views: 280,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
      link: 'https://www.youtube.com/embed/gW8tSw6lZ2Q',
      description: `Peasant ATM, burgers on credit, Communist VISA: read the history of domestic banking and get as much as 500 roketrubles https://history.rocketbank.ru/ 
        This is the KuJi Podcast we just say. In this issue, Andrey Konyaev and Timur karginov discuss homeopathy, GMOs, and atheism with Alexander Panin`,
      date: new Date('2022-01-03'),
    },
    {
      id: '2',
      name: 'Video #2',
      views: 1500,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
      description: 'Another one description',
      date: new Date('2022-12-20'),
    },
    {
      id: '3',
      name: 'Video #3',
      views: 1800,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
      date: new Date('2022-10-26'),
    },
    {
      id: '4',
      name: 'Video #4',
      views: 3000,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
      date: new Date('2022-12-09'),
    },
    {
      id: '5',
      name: 'Video #5',
      views: 1802,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
      date: new Date('2022-07-04'),
    },
  ];

  onSearchItemsChanged = new Subject<SearchItem[]>();

  getSearchItems() {
    return this.searchItems.slice();
  }

  getSearchItemById(id: string) {
    return this.searchItems.find((item) => item.id === id);
  }

  addSearchItem(item: SearchItem) {
    this.searchItems.push(item);
  }

  sortByDate(isAsc: boolean) {
    let result = [];

    if (isAsc) {
      result = this.searchItems
        .slice()
        .sort((itemA, itemB) => Number(itemA.date) - Number(itemB.date));
    } else {
      result = this.searchItems
        .slice()
        .sort((itemA, itemB) => Number(itemB.date) - Number(itemA.date));
    }

    return result;
  }

  sortByViews(isAsc: boolean) {
    let result = [];

    if (isAsc) {
      result = this.searchItems
        .slice()
        .sort((itemA, itemB) => itemA.views - itemB.views);
    } else {
      result = this.searchItems
        .slice()
        .sort((itemA, itemB) => itemB.views - itemA.views);
    }

    return result;
  }

  sortBySentence(sentence: string) {
    let result = this.searchItems.slice().filter((item) => {
      if (item.name.search(new RegExp(sentence, 'ig')) != -1) {
        return true;
      }

      if (
        item.description &&
        item.description?.search(new RegExp(sentence, 'ig')) != -1
      ) {
        return true;
      }

      return false;
    });

    return result;
  }
}
