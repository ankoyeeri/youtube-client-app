import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { SearchItemDetailsComponent } from './search-item-details/search-item-details.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchRoutesModule } from './search-routes.module';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchItemDetailsComponent,
    SearchResultsComponent,
  ],
  imports: [SharedModule, SearchRoutesModule, PipesModule],
})
export class SearchModule {}
