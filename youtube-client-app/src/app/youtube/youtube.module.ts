import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchRoutesModule } from './search-routes.module';

@NgModule({
  declarations: [SearchItemComponent],
  imports: [CommonModule],
})
export class YoutubeModule {}
