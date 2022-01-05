import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
  pure: false,
})
export class ArrayToStringPipe implements PipeTransform {
  transform(arr: any[], ...args: unknown[]): string {
    return arr.join(', ');
  }
}
