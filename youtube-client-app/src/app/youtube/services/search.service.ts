import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';

type searchItemsLength = number;

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private youtubeSearchListUrl = 'https://www.googleapis.com/youtube/v3/search';
  private youtubeVideoListUrl = 'https://www.googleapis.com/youtube/v3/videos';

  private searchItems: SearchItem[] = [];
  searchItemsChanged = new Subject<searchItemsLength>();

  constructor(private http: HttpClient) {}

  search(searchLine: string) {
    this.http
      .get<any>(this.youtubeSearchListUrl, {
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 5,
          q: searchLine,
        },
      })
      .pipe(
        map((response) => {
          return response.items.map((item) => {
            return { id: item.id.videoId };
          });
        })
      )
      .subscribe((videoIds) => {
        let httpParams = new HttpParams().append('part', 'snippet,statistics');

        for (let item of videoIds) {
          httpParams = httpParams.append('id', item.id);
        }

        this.http
          .get<SearchResponse>(this.youtubeVideoListUrl, {
            params: httpParams,
          })
          .subscribe((response) => {
            this.searchItems = response.items.reduce((prItem, curItem) => {
              let searchItem: SearchItem = {
                id: curItem.id,
                name: curItem.snippet.title,
                views: +curItem.statistics.viewCount,
                likes: +curItem.statistics.likeCount,
                dislikes: 0,
                comments: +curItem.statistics.commentCount,
                image: curItem.snippet.thumbnails.medium.url,
                link: `https://www.youtube.com/watch?v=${curItem.id}`,
                description: curItem.snippet.description,
                date: new Date(curItem.snippet.publishedAt),
              };

              return [...prItem, searchItem];
            }, [] as SearchItem[]);

            this.searchItemsChanged.next(this.searchItems.length);
          });
      });
  }

  getSearchItems() {
    return this.searchItems.slice();
  }

  getSearchItemById(id: string) {
    let result = this.searchItems.find((item) => item.id === id);

    if (!result) {
      throw new Error('Item not found');
    }

    return result;
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
