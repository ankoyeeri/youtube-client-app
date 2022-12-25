import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphFormat',
})
export class ParagraphFormatPipe implements PipeTransform {
  /**
   * Works only if you'll add 'white-space: pre-line' to your parent element in CSS
   * @param value Input string
   * @param newLineAmount Number of new lines to be added
   * @returns Modified string
   *
   */
  transform(value: any, newLineAmount: number = 1): any {
    const str: string = value;
    return str.replace('\n', '\n'.repeat(newLineAmount + 1));
  }
}
