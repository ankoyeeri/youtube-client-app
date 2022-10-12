import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  searchResults: SearchItem[] = [
    {
      name: 'Video #1',
      views: 280,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
    },
    {
      name: 'Video #2',
      views: 1500,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
    },
    {
      name: 'Video #3',
      views: 1800,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
    },
    {
      name: 'Video #4',
      views: 3000,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
    },
    {
      name: 'Video #5',
      views: 1802,
      likes: 100,
      dislikes: 15,
      comments: 74,
      image: 'https://picsum.photos/640/480',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
