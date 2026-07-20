"use client";

import CalculatorForm from "@/components/form/CalculatorForm";
import { calculateKdv } from "./utils";
import validateRequired from "@/lib/validation/validateRequired";

const fields = [
  {
    name: "price",
    label: "Tutar (₺)",
    type: "text",
  },
  {
    name: "rate",
    label: "KDV oranı",
    type: "text",
  },
  {
    name: "isIncluding",
    type: "radio",
    options: [
      { label: "KDV dahil", value: "including" },
      { label: "KDV hariç", value: "not including" },
    ],
  },
];

export default function KdvForm({ title }) {
  return (
    <CalculatorForm
      title={title}
      fields={fields}
      initialValues={{
        price: "",
        rate: 20,
        isIncluding: "including",
      }}
      validate={(formData) => validateRequired(formData, ["price", "rate"])}
      calculate={calculateKdv}
      descriptionResolver={(formData) =>
        formData.isIncluding === "not including"
          ? "KDV hariç fiyata KDV ekleyin."
          : "KDV dahil fiyattan KDV’yi çıkarın."
      }
    />
  );
}
