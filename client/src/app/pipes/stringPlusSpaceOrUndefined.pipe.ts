import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPlusSpaceOrUndefined'
})
export class StringPlusSpaceOrUndefinedPipe implements PipeTransform {
  transform(value: string | number): string {
    return value !== undefined ? value + ' ' : '';
  }
}