import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export default function EmailDomainValidator(allowedDomains: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;

    if (!email) return null;

    if (/^\d/.test(email)) {
      return {
        emailStartError: {
          message: "Email can't start with a number"
        }
      };
    }

    const domain = email.substring(email.lastIndexOf('@') + 1).toLowerCase();
    const isValidDomain = allowedDomains.includes(domain);

    if (!isValidDomain) {
      return {
        emailDomainError: {
          message: `Email domain must be one of: ${allowedDomains.join(', ')}`
        }
      };
    }

    return null;
  };
}
