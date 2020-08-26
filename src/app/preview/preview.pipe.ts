import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preview',
})
export class PreviewPipe implements PipeTransform {
  transform(value: string, maxLength = 50): string {
    if (!value) {
      return '';
    }

    if (value.length <= maxLength) {
      return value;
    }

    return `${value.substring(0, maxLength)}...`;
  }
}
