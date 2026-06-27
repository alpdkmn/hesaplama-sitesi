import { useState } from "react";

export function useCalculatorForm({ initialValues, validate, calculate }) {
  const [formData, setFormData] = useState(initialValues);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // input değişince hatayı temizle
    if (error) setError(null);
  };

  const submit = () => {
    if (validate && !validate(formData)) {
      setError({
        id: Date.now(),
        message: "Lütfen tüm zorunlu alanları doldurun",
      });
      setResult(null);
      return;
    }

    setError(null);
    setResult(calculate(formData));
  };

  const reset = () => {
    setFormData(initialValues);
    setResult(null);
    setError(null);
  };

  return {
    formData,
    result,
    handleChange,
    submit,
    reset,
    error,
  };
}
