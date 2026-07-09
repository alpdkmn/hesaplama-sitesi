"use client";
import { Box, Button, Paper, TextField } from "@mui/material";
import PageHeader from "@/components/form/PageHeader";
import ResultBox from "@/components/form/ResultBox";
import FormBox from "@/components/form/FormBox";
import React, { useState } from "react";
import { calculateMinimumPayment } from "./utils";
import validateRequired from "@/lib/validation/validateRequired";
import FieldRenderer from "@/components/form/FieldRenderer";
import CalculatorForm from "@/components/form/CalculatorForm";

const fields = [
  { name: "debt", label: "Toplam borç (₺)", type: "text" },
  { name: "limit", label: "Kart limiti (₺)", type: "text" },
];

function KrediKartiAsgariForm({ title }) {
  return (
    <CalculatorForm
      title={title}
      fields={fields}
      initialValues={{ debt: "", limit: "" }}
      calculate={calculateMinimumPayment}
      validate={(formData) => validateRequired(formData, ["debt", "limit"])}
      description="Toplam borcunuza ve kart limitinize göre ödemeniz gereken asgari tutarı anında hesaplayın."
    />
  );
}
export default KrediKartiAsgariForm;
