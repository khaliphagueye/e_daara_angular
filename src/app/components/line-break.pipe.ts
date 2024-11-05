import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreak',
  standalone: true // Assurez-vous que le pipe est autonome
})
export class LineBreakPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.replace(/\n/g, '<br>'); // Remplace les sauts de ligne par <br>
  }
}
