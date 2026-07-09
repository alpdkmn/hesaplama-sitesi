import { useState } from "react";
import { normalizeFormData } from "@/lib/normalize/normalizeFormData";

export function useCalculatorForm({ initialValues, validate, calculate }) {
  const [formData, setFormData] = useState(initialValues);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError(null);
  };

  const submit = () => {
    const validation = validate(formData);

    // 🔥 FIX: artık object geliyor
    if (!validation.isValid) {
      setError({
        id: Date.now(),
        message: "Hatalı giriş",
        errors: validation.errors,
      });

      setResult(null);
      return;
    }

    const normalized = normalizeFormData(formData);
    const calcResult = calculate(normalized);

    setResult(calcResult);
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
