
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class InputValidator  {
  static cannotContainSpace(control:AbstractControl) : ValidationErrors | null {
    if(control.value.indexOf(' ') >= 0 ){
      return {cannotContainSpace:true};
    }
    return null;
  }
}
