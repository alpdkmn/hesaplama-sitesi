"use client";

import CalculatorForm from "@/components/form/CalculatorForm";
import { calculateGun } from "./utils";
import validateRequired from "@/lib/validation/validateRequired";
import { ToggleButtonGroup, ToggleButton, Box } from "@mui/material";

const types = [
  { key: "between", label: "İki tarih arası gün hesaplama" },
  { key: "add", label: "Tarihe gün ekleme" },
  { key: "subtract", label: "Tarihten gün çıkarma" },
];

const fieldGroups = {
  between: [
    { name: "start", label: "Başlangıç Tarihi", type: "date" },
    { name: "end", label: "Bitiş Tarihi", type: "date" },
    {
      name: "includeStart",
      label: "Başlangıç Tarihini Dahil Et",
      type: "checkbox",
    },
  ],
  add: [
    { name: "start", label: "Başlangıç Tarihi", type: "date" },
    { name: "amount", label: "Gün Sayısı", type: "number" },
  ],
  subtract: [
    { name: "start", label: "Başlangıç Tarihi", type: "date" },
    { name: "amount", label: "Gün Sayısı", type: "number" },
  ],
};

const requiredFieldsMap = {
  between: ["start", "end"],
  add: ["start", "amount"],
  subtract: ["start", "amount"],
};

export default function GunHesaplamaForm() {
  return (
    <CalculatorForm
      title="Gün Hesaplama"
      description="İki tarih arasındaki gün sayısını hesaplayabilir, bir tarihe gün ekleyebilir veya bir tarihten gün çıkarabilirsiniz."
      calculate={calculateGun}
      validate={(formData) =>
        validateRequired(formData, requiredFieldsMap[formData.type])
      }
      initialValues={{
        start: "",
        end: "",
        amount: "",
        includeStart: false,
        type: "between",
      }}
      fields={(formData) => fieldGroups[formData.type]}
      extraControls={(formData, setField) => (
        <Box sx={{ mb: 1 }}>
          <ToggleButtonGroup
            value={formData.type}
            exclusive
            fullWidth
            onChange={(e, val) => {
              if (!val) return;
              setField("type", val);
            }}
          >
            {types.map((t) => (
              <ToggleButton key={t.key} value={t.key}>
                {t.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      )}
    />
  );
}
