import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchItemDetailsComponent } from './pages/search-item-details/search-item-details.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { YoutubeRoutesModule } from './youtube.routes.module';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchItemDetailsComponent,
    SearchResultsComponent,
  ],
  imports: [SharedModule, YoutubeRoutesModule],
  exports: [
    SearchItemComponent,
    SearchItemDetailsComponent,
    SearchResultsComponent,
  ],
})
export class YoutubeModule {}
