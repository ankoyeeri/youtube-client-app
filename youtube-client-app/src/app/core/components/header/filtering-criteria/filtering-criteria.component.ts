import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss'],
})
export class FilteringCriteriaComponent {
  sortByDateAsc = true;
  sortByViewAsc = true;
  sortByWordOrSentenceValue = '';
}
