"use client";

import CalculatorForm from "@/components/form/CalculatorForm";
import { calculateCalorieNeeds } from "./utils";
import validateRequired from "@/lib/validation/validateRequired";

export const calorieFields = [
  {
    name: "gender",
    label: "Cinsiyet",
    type: "radio",
    options: [
      { label: "Erkek", value: "male" },
      { label: "Kadın", value: "female" },
    ],
  },
  {
    name: "age",
    label: "Yaş",
    type: "number",
  },
  {
    name: "height",
    label: "Boy (cm)",
    type: "number",
  },
  {
    name: "weight",
    label: "Kilo (kg)",
    type: "number",
  },
  {
    name: "activity",
    label: "Aktivite Seviyesi",
    type: "select",
    options: [
      {
        label: "Hareketsiz",
        value: 1.2,
      },
      {
        label: "Az Aktif",
        value: 1.375,
      },
      {
        label: "Orta Aktif",
        value: 1.55,
      },
      {
        label: "Çok Aktif",
        value: 1.725,
      },
    ],
  },
];
function BmrForm({ title }) {
  return (
    <CalculatorForm
      title={title}
      fields={calorieFields}
      initialValues={{
        gender: "",
        age: "",
        height: "",
        weight: "",
      }}
      validate={(formData) =>
        validateRequired(formData, [
          "gender",
          "age",
          "height",
          "weight",
          "activity",
        ])
      }
      calculate={calculateCalorieNeeds}
      description="Cinsiyet, yaş, boy, kilo ve aktivite bilgilerinizi girerek günlük kalori ihtiyacınızı hesaplayın. "
    />
  );
}

export default BmrForm;
