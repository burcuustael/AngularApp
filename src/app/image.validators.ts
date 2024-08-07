import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ImageValidators {
  static isValidExtension(control: AbstractControl): ValidationErrors | null {
    const v = control.value as string;

    if (v.endsWith('.jpg') || v.endsWith('.png') || v.endsWith('.jpeg')) {
      return null;
    } else {
        return  wrongExtension: true;
    }
  }
}
