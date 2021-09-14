import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squaredNumber',
})
export class SquaredNumberPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
