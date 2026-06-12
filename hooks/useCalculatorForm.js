import { useState } from "react";

export function useCalculatorForm({ initialValues, validate, calculate }) {
  const [formData, setFormData] = useState(initialValues);
  const [result, setResult] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = () => {
    if (validate && !validate(formData)) return;

    const res = calculate(formData);
    setResult(res);
  };

  const reset = () => {
    setFormData(initialValues);
    setResult(null);
  };

  return {
    formData,
    result,
    handleChange,
    submit,
    reset,
  };
}
