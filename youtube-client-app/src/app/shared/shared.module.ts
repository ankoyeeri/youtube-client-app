import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorLineComponent } from './color-line/color-line.component';
import { ParagraphFormatPipe } from './pipes/paragraph-format.pipe';
import { SearchForPipe } from './pipes/searchFor.pipe';
import { VideoStatsComponent } from './video-stats/video-stats.component';

@NgModule({
  declarations: [
    VideoStatsComponent,
    ColorLineComponent,
    ParagraphFormatPipe,
    SearchForPipe,
  ],
  exports: [
    CommonModule,
    VideoStatsComponent,
    ColorLineComponent,
    ParagraphFormatPipe,
    SearchForPipe,
  ],
})
export class SharedModule {}
