import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilteringCriteriaComponent } from './filtering-criteria/filtering-criteria.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent, FilteringCriteriaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
