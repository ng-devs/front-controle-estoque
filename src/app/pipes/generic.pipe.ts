import { Injector, Pipe, PipeTransform } from '@angular/core';
import { AvailablePipes } from '@app/models';

@Pipe({
  name: 'genericPipe',
})
export class GenericPipe implements PipeTransform {
  constructor(private injector: Injector) {}

  transform(
    value: any,
    requiredPipe: AvailablePipes,
    ...pipeArgs: string[]
  ): any {
    const pipe = this.injector.get<AvailablePipes & PipeTransform>(
      requiredPipe as any
    );
    return pipe.transform(value, ...pipeArgs);
  }
}
