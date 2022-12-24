import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchItem } from 'src/app/search/search-item.model';

@Component({
  selector: 'app-video-stats',
  templateUrl: './video-stats.component.html',
  styleUrls: ['./video-stats.component.scss'],
})
export class VideoStatsComponent implements OnInit {
  @Input() searchItem?: SearchItem;
  views?: number;
  likes?: number;
  dislikes?: number;
  comments?: number;

  constructor() {}

  ngOnInit(): void {
    this.views = this.searchItem?.views;
    this.likes = this.searchItem?.likes;
    this.dislikes = this.searchItem?.dislikes;
    this.comments = this.searchItem?.comments;
  }
}
