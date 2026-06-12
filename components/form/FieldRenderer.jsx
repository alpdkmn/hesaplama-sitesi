import {
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

function FieldRenderer({ field, value, onChange }) {
  switch (field.type) {
    case "text":
    case "number":
      return (
        <TextField
          label={field.label}
          type={field.type}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          fullWidth
        />
      );

    case "radio":
      return (
        <RadioGroup
          row
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
        >
          {field.options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      );
    case "select":
      return (
        <FormControl fullWidth>
          <InputLabel>{field.label}</InputLabel>
          <Select
            value={value || ""}
            label={field.label}
            onChange={(e) => onChange(field.name, e.target.value)}
            MenuProps={{
              slotProps: {
                paper: {
                  style: {
                    maxHeight: 250,
                  },
                },
              },
            }}
          >
            {field.options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case "date":
      return (
        <TextField
          label={field.label}
          type="date"
          value={value || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          fullWidth
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      );
    case "checkbox":
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={value || false}
              onChange={(e) => onChange(field.name, e.target.checked)}
            />
          }
          label={field.label}
        />
      );

    default:
      return null;
  }
}

export default FieldRenderer;
