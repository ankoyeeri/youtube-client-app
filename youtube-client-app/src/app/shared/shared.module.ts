import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorLineComponent } from './color-line/color-line.component';
import { VideoStatsComponent } from './video-stats/video-stats.component';

@NgModule({
  declarations: [VideoStatsComponent, ColorLineComponent],
  exports: [CommonModule, VideoStatsComponent, ColorLineComponent],
})
export class SharedModule {}
