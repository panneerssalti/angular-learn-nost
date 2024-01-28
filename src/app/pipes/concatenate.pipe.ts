import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenate',
  pure:true
})
export class ConcatenatePipe implements PipeTransform {

  transform(values: string[], ...args: string[]): string {
    return values.join(' ').concat(' ').concat(args.join(' '));
  }

}
