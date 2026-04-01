export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  phone?: string;
  email?: string;
  consent?: string;
}

export function validateEnquiryForm(data: EnquiryFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  // Name: required, min 2 chars, only letters and spaces
  const name = data.name.trim();
  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    errors.name = "Name can only contain letters and spaces";
  }

  // Phone: required, valid Indian mobile (10 digits)
  const phone = data.phone.trim().replace(/\s/g, "");
  if (!phone) {
    errors.phone = "Phone number is required";
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number";
  }

  // Email: required, valid format
  const email = data.email.trim();
  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address";
  }

  return errors;
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
