export default function validateRequired(formData, requiredFields) {
  const errors = {};

  for (const field of requiredFields) {
    const value = formData[field];

    if (value === undefined || value === null || value === "") {
      errors[field] = "Bu alan zorunlu";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
