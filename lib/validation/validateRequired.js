export default function validateRequired(formData, requiredFields) {
  for (const field of requiredFields) {
    if (
      formData[field] === undefined ||
      formData[field] === null ||
      formData[field] === ""
    ) {
      return false;
    }
  }

  return true;
}
