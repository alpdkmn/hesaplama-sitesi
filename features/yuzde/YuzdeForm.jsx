"use client";

import CalculatorForm from "@/components/form/CalculatorForm";
import { calculatePercentage } from "./utils";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import validateRequired from "@/lib/validation/validateRequired";

function YuzdeForm() {
  return (
    <CalculatorForm
      title="Yüzde Hesaplama"
      initialValues={{
        a: "",
        b: "",
        type: "percentOf",
      }}
      validate={(formData) => validateRequired(formData, ["a", "b"])}
      calculate={calculatePercentage}
      descriptionResolver={(formData) => {
        switch (formData.type) {
          case "percentOf":
            return "A sayısının B yüzdesi nedir?";
          case "whatPercent":
            return "A sayısı, B sayısının yüzde kaçıdır?";
          case "changeRate":
            return "A sayısının B sayısına değişim oranı nedir?";
          case "increase":
            return "A sayısı, B yüzde artırılırsa sonuç nedir?";
          case "decrease":
            return "A sayısı, B yüzde azaltılırsa sonuç nedir?";
          default:
            return "";
        }
      }}
      fields={(formData) => {
        const getLabels = (type) => {
          switch (type) {
            case "percentOf":
              return ["A Sayısı", "% B"];
            case "whatPercent":
              return ["A Sayısı", "B Sayısı"];
            case "changeRate":
              return ["Eski Değer", "Yeni Değer"];
            case "increase":
              return ["A", "Artış %"];
            case "decrease":
              return ["A", "Azalış %"];
            default:
              return ["A", "B"];
          }
        };

        const labels = getLabels(formData.type);

        return [
          { name: "a", label: labels[0], type: "number" },
          { name: "b", label: labels[1], type: "number" },
        ];
      }}
      extraControls={(formData, setField) => (
        <ToggleButtonGroup
          value={formData.type}
          exclusive
          onChange={(e, val) => {
            if (!val) return;
            setField("type", val);
          }}
          fullWidth
        >
          <ToggleButton value="percentOf">Yüzdesi</ToggleButton>
          <ToggleButton value="whatPercent">Yüzde Kaçı</ToggleButton>
          <ToggleButton value="changeRate">Değişim</ToggleButton>
          <ToggleButton value="increase">Artış</ToggleButton>
          <ToggleButton value="decrease">Azalış</ToggleButton>
        </ToggleButtonGroup>
      )}
    />
  );
}

export default YuzdeForm;
