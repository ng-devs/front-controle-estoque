import { AbstractControl } from '@angular/forms';

export const VALIDATIONS = [
  {
    key: 'required',
    value: () => 'campo<strong> obrigatório</strong>',
  },
  {
    key: 'email',
    value: () => 'email<strong> inválido</strong>',
  },
  {
    key: 'min',
    value: (control: AbstractControl) =>
      `o valor não pode ser <strong>menor que ${control?.errors?.min.min}</strong>`,
  },
  {
    key: 'minlength',
    value: (control: AbstractControl) =>
      `mínimo de <strong>${control?.errors?.minlength.requiredLength} caracteres</strong>`,
  },
  {
    key: 'maxlength',
    value: (control: AbstractControl) =>
      `máximo de <strong>${control?.errors?.maxlength.requiredLength} caracteres</strong>`,
  },
  {
    key: 'pattern',
    value: () => `<strong>caracteres</strong> inválidos`,
  },
  {
    key: 'lowerCaseCharacter',
    value: (control: AbstractControl) => control?.errors?.lowerCaseCharacter,
  },
  {
    key: 'pascalCaseCharacter',
    value: (control: AbstractControl) => control?.errors?.pascalCaseCharacter,
  },

  {
    key: 'specialCharacter',
    value: (control: AbstractControl) => control?.errors?.specialCharacter,
  },
];
