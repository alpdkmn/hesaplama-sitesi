"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useCalculatorForm } from "../../hooks/useCalculatorForm";
import FormBox from "@/components/form/FormBox";
import PageHeader from "@/components/form/PageHeader";
import ResultBox from "@/components/form/ResultBox";
import FieldRenderer from "@/components/form/FieldRenderer";
import CalculatorActions from "@/components/form/CalculatorActions";
import { useTheme } from "@mui/material/styles";
import { Snackbar, Alert } from "@mui/material";

export default function CalculatorForm({
  title,
  description,
  descriptionResolver,
  fields,
  initialValues,
  validate,
  calculate,
  extraControls,
}) {
  const { formData, result, handleChange, submit, reset, error } =
    useCalculatorForm({
      initialValues,
      validate,
      calculate,
    });

  const theme = useTheme();

  const resolvedFields =
    typeof fields === "function" ? fields(formData) : fields;

  const resolvedDescription =
    typeof descriptionResolver === "function"
      ? descriptionResolver(formData)
      : description;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error?.id]);

  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 2,
        background: theme.palette.background.paper,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0 1px 3px rgba(16, 42, 67, 0.06)",
      }}
    >
      <FormBox onSubmit={submit}>
        <PageHeader title={title} desc={resolvedDescription} />

        {extraControls && (
          <Box sx={{ mt: 2 }}>{extraControls(formData, handleChange)}</Box>
        )}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            mt: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {resolvedFields.map((field) => (
              <FieldRenderer
                key={field.name}
                field={field}
                value={formData[field.name]}
                onChange={handleChange}
                error={error?.errors?.[field.name]}
              />
            ))}

            <CalculatorActions temizle={reset} />
          </Box>

          <ResultBox result={result} />
        </Box>
      </FormBox>

      <Snackbar
        open={open}
        autoHideDuration={2500}
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
    </Box>
  );
}
