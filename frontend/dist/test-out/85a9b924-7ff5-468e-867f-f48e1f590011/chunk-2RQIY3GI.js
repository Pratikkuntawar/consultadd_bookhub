import {
  __esm
} from "./chunk-V6FC2DIM.js";

// src/app/validators/emailValidator.ts
function EmailDomainValidator(allowedDomains) {
  return (control) => {
    const email = control.value;
    if (!email)
      return null;
    if (/^\d/.test(email)) {
      return {
        emailStartError: {
          message: "Email can't start with a number"
        }
      };
    }
    const domain = email.substring(email.lastIndexOf("@") + 1).toLowerCase();
    const isValidDomain = allowedDomains.includes(domain);
    if (!isValidDomain) {
      return {
        emailDomainError: {
          message: `Email domain must be one of: ${allowedDomains.join(", ")}`
        }
      };
    }
    return null;
  };
}
var init_emailValidator = __esm({
  "src/app/validators/emailValidator.ts"() {
    "use strict";
  }
});

export {
  EmailDomainValidator,
  init_emailValidator
};
//# sourceMappingURL=chunk-2RQIY3GI.js.map
