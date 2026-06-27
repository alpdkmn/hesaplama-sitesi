"use client";

import { useState } from "react";
import CalculatorForm from "@/components/form/CalculatorForm";
import { calculateProfit } from "./utils";
import { ToggleButtonGroup, ToggleButton, Box } from "@mui/material";
import validateRequired from "@/lib/validation/validateRequired";

const modeOptions = [
  { label: "Kar Oranı", value: "profitRate" },
  { label: "Satış", value: "salePrice" },
  { label: "Alış", value: "buyPrice" },
];

const pageContent = {
  profitRate: {
    title: "Kar Oranı Hesaplama",
    desc: "Alış ve satış fiyatına göre kar oranı.",
  },
  salePrice: {
    title: "Satış Fiyatı Hesaplama",
    desc: "Hedef kar oranına göre satış.",
  },
  buyPrice: {
    title: "Alış Fiyatı Hesaplama",
    desc: "Satışa göre alış fiyatı.",
  },
};

const fieldGroups = {
  profitRate: [
    { name: "purchasePrice", label: "Alış", type: "number" },
    { name: "salePrice", label: "Satış", type: "number" },
  ],
  salePrice: [
    { name: "purchasePrice", label: "Alış", type: "number" },
    { name: "profitPercent", label: "Kar %", type: "number" },
  ],
  buyPrice: [
    { name: "salePrice", label: "Satış", type: "number" },
    { name: "profitPercent", label: "Kar %", type: "number" },
  ],
};

export default function KarForm() {
  const [mode, setMode] = useState("profitRate");

  const page = pageContent[mode];
  const fields = fieldGroups[mode];

  return (
    <CalculatorForm
      title={page.title}
      description={page.desc}
      calculate={calculateProfit}
      initialValues={{
        purchasePrice: "",
        salePrice: "",
        profitPercent: "",
      }}
      fields={fields}
      extraControls={(formData, setField) => (
        <Box sx={{ mb: 2 }}>
          <ToggleButtonGroup
            value={formData.mode || mode}
            exclusive
            fullWidth
            onChange={(e, val) => {
              if (!val) return;

              setMode(val); // UI state
              setField("mode", val); // form state
            }}
          >
            {modeOptions.map((m) => (
              <ToggleButton key={m.value} value={m.value}>
                {m.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      )}
    />
  );
}
