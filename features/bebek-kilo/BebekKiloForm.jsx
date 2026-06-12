"use client";
import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import FormBox from "@/components/form/FormBox";
import FieldRenderer from "@/components/form/FieldRenderer";
import PageHeader from "@/components/form/PageHeader";
import ResultBox from "@/components/form/ResultBox";
import CalculatorActions from "../../components/form/CalculatorActions";
import CalculatorForm from "@/components/form/CalculatorForm";

import { calculateBabyWeight } from "./utils";
import { validateRequired } from "@/lib/validation/validationRequired";

const fields = [
  {
    name: "mode",
    type: "radio",
    options: [
      { label: "Anne karnındaki bebek", value: "pregnancy" },
      { label: "Doğum sonrası bebek", value: "postbirth" },
    ],
  },
  {
    name: "gender",
    type: "radio",
    options: [
      { label: "Kız", value: "female" },
      { label: "Erkek", value: "male" },
    ],
  },
  {
    name: "week",
    label: "Gebelik haftası",
    type: "text",
  },
  {
    name: "month",
    label: "Ay",
    type: "text",
  },
  {
    name: "weight",
    label: "Kilo (kg)",
    type: "text",
  },
];

function BabyWeightForm({ title }) {
  const [formData, setFormData] = useState({
    mode: "pregnancy",
    gender: "",
    week: "",
    month: "",
    weight: "",
  });

  const visibleFieldsByMode = {
    pregnancy: ["mode", "gender", "week"],
    postbirth: ["mode", "gender", "month", "weight"],
  };

  const filteredFields = fields.filter((f) =>
    visibleFieldsByMode[formData.mode].includes(f.name),
  );

  return (
    <CalculatorForm
      title={title}
      fields={filteredFields}
      initialValues={formData}
      calculate={calculateBabyWeight}
      onFormDataChange={setFormData}
      descriptionResolver={(formData) => {
        if (formData.mode === "pregnancy") {
          return "Anne karnındaki bebeğin kilosunu hesaplayın.";
        }
        return "Doğum sonrası bebeğin kilosunu hesaplayın.";
      }}
    />
  );
}

export default BabyWeightForm;
