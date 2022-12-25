import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, HeaderModule],
  exports: [HeaderModule, ErrorComponent],
})
export class CoreModule {}
