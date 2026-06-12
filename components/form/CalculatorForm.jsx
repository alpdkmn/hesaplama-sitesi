import { useEffect } from "react";
import { Box } from "@mui/material";
import { useCalculatorForm } from "../../hooks/useCalculatorForm";

import FormBox from "@/components/form/FormBox";
import PageHeader from "@/components/form/PageHeader";
import ResultBox from "@/components/form/ResultBox";
import FieldRenderer from "@/components/form/FieldRenderer";
import CalculatorActions from "@/components/form/CalculatorActions";
import { useTheme } from "@mui/material/styles";
export default function CalculatorForm({
  title,
  description,
  descriptionResolver,
  fields,
  initialValues,
  calculate,
  extraControls,
}) {
  const { formData, result, handleChange, submit, reset } = useCalculatorForm({
    initialValues,
    calculate,
  });
  const theme = useTheme();
  const resolvedFields =
    typeof fields === "function" ? fields(formData) : fields;

  const resolvedDescription =
    typeof descriptionResolver === "function"
      ? descriptionResolver(formData)
      : description;
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 4,
        background: theme.effects.surface,
        boxShadow: 3,
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {resolvedFields.map((field) => (
              <FieldRenderer
                key={field.name}
                field={field}
                value={formData[field.name]}
                onChange={handleChange}
              />
            ))}

            <CalculatorActions temizle={reset} />
          </Box>

          <ResultBox result={result} />
        </Box>
      </FormBox>
    </Box>
  );
}
