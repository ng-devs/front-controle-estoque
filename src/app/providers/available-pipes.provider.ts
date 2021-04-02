import { CurrencyPipe, DatePipe } from '@angular/common';

export const AVAILABLE_PIPES = [
  {
    provide: 'date',
    useClass: DatePipe,
  },
  {
    provide: 'currency',
    useClass: CurrencyPipe,
  },
];
