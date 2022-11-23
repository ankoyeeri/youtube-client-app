import { NgModule } from '@angular/core';
import { ParagraphFormatPipe } from './paragraph-format.pipe';

@NgModule({
  declarations: [ParagraphFormatPipe],
  exports: [ParagraphFormatPipe],
})
export class PipesModule {}
