import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { SearchItemDetailsComponent } from './pages/search-item-details/search-item-details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: SearchResultsComponent,
  },
  { path: 'video/:id', component: SearchItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutesModule {}
