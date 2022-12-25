import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchItemDetailsComponent } from './components/search-item-details/search-item-details.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  { path: 'results', component: SearchResultsComponent },
  { path: 'results/:id', component: SearchItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutesModule {}
