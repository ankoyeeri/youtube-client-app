import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { SearchItemDetailsComponent } from './components/search-item-details/search-item-details.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

@NgModule({
  declarations: [SearchItemComponent, SearchItemDetailsComponent],
  imports: [CommonModule, PipesModule],
})
export class YoutubeModule {}
