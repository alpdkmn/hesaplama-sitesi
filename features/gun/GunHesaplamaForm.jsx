"use client";

import React, { useState, useEffect } from "react";
import PageHeader from "@/components/form/PageHeader";
import ResultBox from "@/components/form/ResultBox";
import FormBox from "@/components/form/FormBox";
import validateRequired from "@/lib/validation/validateRequired";
import FieldRenderer from "@/components/form/FieldRenderer";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Snackbar,
  Alert,
} from "@mui/material";

import { calculateGun } from "./utils";

const fields = [
  {
    name: "start",
    label: "Başlangıç Tarihi",
    type: "date",
  },
  {
    name: "end",
    label: "Bitiş Tarihi",
    type: "date",
  },
  {
    name: "amount",
    label: "Gün Sayısı",
    type: "number",
  },
  {
    name: "includeStart",
    label: "Başlangıç Tarihini Dahil Et",
    type: "checkbox",
  },
];

const requiredFieldsMap = {
  between: ["start", "end", "includeStart"],
  add: ["start", "amount"],
  subtract: ["start", "amount"],
};

const types = [
  { key: "between", label: "İki tarih arası gün hesaplama" },
  { key: "add", label: "Tarihe gün ekleme" },
  { key: "subtract", label: "Tarihten gün çıkarma" },
];

function GunHesaplamaForm() {
  const [formData, setFormData] = useState({
    start: "",
    end: "",
    amount: "",
    includeStart: false,
    type: "between",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  // aktif hesaplama tipine göre alanlar
  const requiredFields = requiredFieldsMap[formData.type];

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error?.id]);
  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError(null);
    }
  };

  const hesapla = () => {
    const isValid = validateRequired(formData, requiredFields);

    if (!isValid) {
      setError({
        id: Date.now(),
        message: "Lütfen tüm zorunlu alanları doldurun",
      });

      return;
    }

    setError(null);

    const resultData = calculateGun(formData);

    setResult(resultData);
  };

  const temizle = () => {
    setFormData({
      start: "",
      end: "",
      amount: "",
      includeStart: false,
      type: "between",
    });

    setResult(null);
  };

  return (
    <FormBox onSubmit={hesapla}>
      <Paper
        elevation={6}
        sx={{ p: 4, borderRadius: 4, background: theme.effects.surface }}
      >
        <PageHeader
          title={"Gün Hesaplama"}
          desc={
            "İki tarih arasındaki gün sayısını hesaplayabilir, bir tarihe gün ekleyebilir veya bir tarihten gün çıkarabilirsiniz."
          }
        />

        {/* TYPE SELECTOR */}
        <ToggleButtonGroup
          value={formData.type}
          exclusive
          onChange={(e, val) => {
            if (val) {
              setFormData((prev) => ({
                ...prev,
                type: val,
              }));

              setResult(null);
            }
          }}
          fullWidth
          sx={{ mt: 3 }}
        >
          {types.map((type) => (
            <ToggleButton key={type.key} value={type.key}>
              {type.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            mt: 3,
            gap: 4,
          }}
        >
          {/* FORM */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {fields
              .filter((field) => requiredFields.includes(field.name))
              .map((field) => (
                <FieldRenderer
                  key={field.name}
                  field={field}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              ))}

            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <Button type="submit" variant="contained" fullWidth size="large">
                Hesapla
              </Button>

              <Button
                variant="outlined"
                fullWidth
                size="large"
                onClick={temizle}
              >
                Temizle
              </Button>
            </Box>
          </Box>

          {/* RESULT */}
          <ResultBox result={result} />
        </Box>
      </Paper>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert severity="error" variant="filled">
          {error?.message}
        </Alert>
      </Snackbar>
    </FormBox>
  );
}

export default GunHesaplamaForm;
