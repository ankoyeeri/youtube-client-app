import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-color-line',
  templateUrl: './color-line.component.html',
  styleUrls: ['./color-line.component.scss'],
})
export class ColorLineComponent implements AfterViewInit {
  @Input() date: Date;
  @ViewChild('coloredLine', { static: false })
  clInputElement: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    if (this.date) {
      const colorClass = this.setColorClass(this.date);
      this.clInputElement.nativeElement.classList.add(colorClass);
    }
  }

  private setColorClass(date: Date) {
    const currentDate = new Date();
    const diffMs = currentDate.getTime() - date.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    const diffMonth = Math.ceil(diffDays / 30);

    if (diffDays < 7) {
      return 'blue';
    }

    if (diffDays >= 7 && diffDays < 32) {
      return 'green';
    }

    if (diffMonth > 6) {
      return 'red';
    }

    if (diffMonth > 1 && diffMonth <= 6) {
      return 'yellow';
    }

    return '';
  }
}
