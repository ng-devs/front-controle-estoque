import { Injector, Pipe, PipeTransform } from '@angular/core';
import { AvailablePipes } from '@app/models';

@Pipe({
  name: 'genericPipe',
})
export class GenericPipe implements PipeTransform {
  constructor(private injector: Injector) {}

  transform(value: any, requiredPipe: any, pipeArgs: any): any {
    const pipe = this.injector.get<AvailablePipes & PipeTransform>(requiredPipe);
    return pipe.transform(value, pipeArgs);
  }
}
