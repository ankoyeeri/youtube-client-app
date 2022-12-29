import { AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenDateValidator(
  control: AbstractControl<Date, Date>
): ValidationErrors | null {
  const date = new Date(control.value);

  if (Date.now() < date.getTime()) {
    return { forbiddenDateValidator: true };
  }

  return null;
}
