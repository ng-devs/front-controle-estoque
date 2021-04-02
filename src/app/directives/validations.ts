import { AbstractControl } from '@angular/forms';

export const VALIDATIONS = [
  {
    errorName: 'required',
    messageFn: () => 'campo<strong> obrigatório</strong>',
  },
  {
    errorName: 'email',
    messageFn: () => 'email<strong> inválido</strong>',
  },
  {
    errorName: 'min',
    messageFn: (control: AbstractControl) =>
      `o valor não pode ser <strong>menor que ${control?.errors?.min.min}</strong>`,
  },
  {
    errorName: 'minlength',
    messageFn: (control: AbstractControl) =>
      `mínimo de <strong>${control?.errors?.minlength.requiredLength} caracteres</strong>`,
  },
  {
    errorName: 'maxlength',
    messageFn: (control: AbstractControl) =>
      `máximo de <strong>${control?.errors?.maxlength.requiredLength} caracteres</strong>`,
  },
  {
    errorName: 'pattern',
    messageFn: () => `<strong>caracteres</strong> inválidos`,
  },
  {
    errorName: 'lowerCaseCharacter',
    messageFn: (control: AbstractControl) =>
      control?.errors?.lowerCaseCharacter,
  },
  {
    errorName: 'pascalCaseCharacter',
    messageFn: (control: AbstractControl) =>
      control?.errors?.pascalCaseCharacter,
  },

  {
    errorName: 'specialCharacter',
    messageFn: (control: AbstractControl) => control?.errors?.specialCharacter,
  },
];
