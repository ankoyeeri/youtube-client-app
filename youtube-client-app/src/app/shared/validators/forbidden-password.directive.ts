import { AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenPasswordValidator(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.value as string;

  if (password.length < 8) return { forbiddenPassword: true };

  // Check both Uppercase and Lowercase letters
  // A mixture of letters and numbers
  // inclusion of at least one special character
  if (
    !RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)()(?=.*[-+_!@#$%^&*.,?])/g).test(
      password
    )
  )
    return { forbiddenPassword: true };

  if (!RegExp(/a/g).test(password)) return { forbiddenPassword: true };

  return null;
}
