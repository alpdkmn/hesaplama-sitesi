"use client";

import { calculateFinalRequired } from "./utils";
import CalculatorForm from "@/components/form/CalculatorForm";
import validateRequired from "@/lib/validation/validateRequired";

const fields = [
  {
    name: "vize",
    label: "Vize notu",
    type: "text",
  },
  {
    name: "vizeOrani",
    label: "Vize oranı",
    type: "text",
  },
  {
    name: "finalOrani",
    label: "Final oranı",
    type: "number",
  },
  {
    name: "gecmeNotu",
    label: "Geçme notu",
    type: "text",
  },
];
function FinaldenForm({ title }) {
  return (
    <CalculatorForm
      title={title}
      fields={fields}
      initialValues={{
        vize: "",
        vizeOrani: 40,
        finalOrani: 60,
        gecmeNotu: "",
      }}
      validate={(formData) =>
        validateRequired(formData, [
          "vize",
          "vizeOrani",
          "finalOrani",
          "gecmeNotu",
        ])
      }
      calculate={calculateFinalRequired}
      description="Vize ve final notlarınıza göre finalden kaç almanız gerektiğini anında hesaplayın."
    />
  );
}

export default FinaldenForm;
