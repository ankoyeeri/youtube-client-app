import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { SearchItemDetailsComponent } from './components/search-item-details/search-item-details.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { YoutubeRoutesModule } from './youtube-routes.module';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchItemDetailsComponent,
    SearchResultsComponent,
  ],
  imports: [SharedModule, YoutubeRoutesModule, PipesModule],
  exports: [
    SearchItemComponent,
    SearchItemDetailsComponent,
    SearchResultsComponent,
  ],
})
export class YoutubeModule {}
