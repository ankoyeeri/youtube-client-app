import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParagraphFormatPipe } from './pipes/paragraph-format.pipe';
import { SearchForPipe } from './pipes/searchFor.pipe';

@NgModule({
  declarations: [ParagraphFormatPipe, SearchForPipe],
  exports: [CommonModule, ParagraphFormatPipe, SearchForPipe],
})
export class SharedModule {}
