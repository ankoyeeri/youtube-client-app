import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParagraphFormatPipe } from './pipes/paragraph-format.pipe';
import { SearchForPipe } from './pipes/searchFor.pipe';
import { TrimPipe } from './pipes/trim.pipe';

@NgModule({
  declarations: [ParagraphFormatPipe, SearchForPipe, TrimPipe],
  exports: [CommonModule, ParagraphFormatPipe, SearchForPipe, TrimPipe],
})
export class SharedModule {}
