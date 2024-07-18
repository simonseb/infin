const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

function validatePhoneNumber(phoneNumber: string) {
  const pattern = /^\+?1?\d{9,15}$/;
  return pattern.test(phoneNumber);
}

function validateNumberOfEmployees(num: string) {
  const number = parseInt(num, 10);
  return Number.isInteger(number) && number > 50 && number <= 100;
}

export const validateFormDemo = (formData: any) => {
  let formValid = true;
  let errors = {
    firstName: '',
    lastName: '',
    email: '',
    employees: '',
    company: '',
    jobTitle: '',
    phone: '',
  };

  if (!formData.firstName.trim()) {
    errors.firstName = 'Name is required';
    formValid = false;
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Name is required';
    formValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
    formValid = false;
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Invalid email format';
    formValid = false;
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required';
    formValid = false;
  } else if (!validatePhoneNumber(formData.phone)) {
    errors.phone = 'Invalid phone number format';
    formValid = false;
  }

  if (!formData.jobTitle.trim()) {
    errors.jobTitle = 'Job title is required';
    formValid = false;
  }

  if (!formData.company.trim()) {
    errors.company = 'Company name is required';
    formValid = false;
  }

  if (!formData.employees.trim()) {
    errors.employees = 'Employees number is required';
    formValid = false;
  } else if (!validateNumberOfEmployees(formData.employees)) {
    errors.employees = 'Invalid employees number';
    formValid = false;
  }
  return { errors, formValid };
};

export const validateFormTouch = (formData: any) => {
  let formValid = true;
  let errors = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  if (!formData.firstName.trim()) {
    errors.firstName = 'Name is required';
    formValid = false;
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Name is required';
    formValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
    formValid = false;
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Invalid email format';
    formValid = false;
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required';
    formValid = false;
  }

  return { errors, formValid };
};
