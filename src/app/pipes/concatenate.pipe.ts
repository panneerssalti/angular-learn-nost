import { Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs';

@Pipe({
  name: 'concatenate',
  pure:true
})
export class ConcatenatePipe implements PipeTransform {

  transform(values: string[], ...args: string[]): string {
    return values.join(' ').concat(' ').concat(args.join(' '));
  }

}
