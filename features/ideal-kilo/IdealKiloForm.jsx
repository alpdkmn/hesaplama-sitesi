"use client";

import { calculateIdealWeight } from "./utils";
import CalculatorForm from "@/components/form/CalculatorForm";
import validateRequired from "@/lib/validation/validateRequired";

const fields = [
  {
    name: "gender",
    type: "radio",
    options: [
      {
        label: "Kadın",
        value: "female",
      },
      {
        label: "Erkek",
        value: "male",
      },
    ],
  },
  {
    name: "height",
    label: "Boy (cm)",
    type: "text",
  },
  {
    name: "weight",
    label: "Kilo (kg)",
    type: "text",
  },
];

function IdealKiloForm({ title }) {
  return (
    <CalculatorForm
      title={title}
      fields={fields}
      initialValues={{
        gender: "",
        height: "",
        weight: "",
      }}
      validate={(formData) =>
        validateRequired(formData, ["gender", "height", "weight"])
      }
      calculate={calculateIdealWeight}
      description="Boy ve kilo bilgilerinizi girerek ideal kilonuzu hesaplayın."
    />
  );
}

export default IdealKiloForm;
