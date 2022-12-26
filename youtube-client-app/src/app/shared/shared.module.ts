import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParagraphFormatPipe } from './pipes/paragraph-format.pipe';
import { SearchForPipe } from './pipes/searchFor.pipe';
import { VideoStatsComponent } from './video-stats/video-stats.component';

@NgModule({
  declarations: [VideoStatsComponent, ParagraphFormatPipe, SearchForPipe],
  exports: [
    CommonModule,
    VideoStatsComponent,
    ParagraphFormatPipe,
    SearchForPipe,
  ],
})
export class SharedModule {}
