import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { VideoStatsComponent } from '../shared/video-stats/video-stats.component';
import { SearchItemDetailsComponent } from './search-item-details/search-item-details.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchRoutesModule } from './search-routes.module';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchItemDetailsComponent,
    SearchResultsComponent,
    VideoStatsComponent,
  ],
  imports: [CommonModule, SearchRoutesModule, PipesModule],
})
export class SearchModule {}
