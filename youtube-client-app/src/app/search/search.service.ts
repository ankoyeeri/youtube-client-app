import { Subject } from 'rxjs';
import { SearchItem } from './search-item.model';

export class SearchService {
  private searchItems: SearchItem[] = [
    {
      name: 'Video #1',
      views: 280,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
      link: 'https://www.youtube.com/embed/gW8tSw6lZ2Q',
      description: `Peasant ATM, burgers on credit, Communist VISA: read the history of domestic banking and get as much as 500 roketrubles https://history.rocketbank.ru/ 
        This is the KuJi Podcast we just say. In this issue, Andrey Konyaev and Timur karginov discuss homeopathy, GMOs, and atheism with Alexander Panin`,
      date: new Date('2023-07-03'),
    },
    {
      name: 'Video #2',
      views: 1500,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
      description: 'Another one description',
      date: new Date('2023-01-18'),
    },
    {
      name: 'Video #3',
      views: 1800,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
      date: new Date('2023-06-26'),
    },
    {
      name: 'Video #4',
      views: 3000,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
      date: new Date('2023-09-09'),
    },
    {
      name: 'Video #5',
      views: 1802,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
      date: new Date('2023-07-04'),
    },
  ];

  onSearchItemsChanged = new Subject<SearchItem[]>();

  getSearchItems() {
    return this.searchItems.slice();
  }

  getSearchItem(index: number) {
    return this.searchItems[index];
  }

  sortByDate() {
    let result = this.searchItems
      .slice()
      .sort((itemA, itemB) => Number(itemA.date) - Number(itemB.date));

    return result;
  }

  sortByViews() {
    let result = this.searchItems
      .slice()
      .sort((itemA, itemB) => itemA.views - itemB.views);

    return result;
  }
}
