import CalculatorForm from "@/components/form/CalculatorForm";
import { calculateHoroscope } from "./utils";
import validateRequired from "@/lib/validation/validateRequired";

export const months = [
  { value: 1, label: "Ocak" },
  { value: 2, label: "Şubat" },
  { value: 3, label: "Mart" },
  { value: 4, label: "Nisan" },
  { value: 5, label: "Mayıs" },
  { value: 6, label: "Haziran" },
  { value: 7, label: "Temmuz" },
  { value: 8, label: "Ağustos" },
  { value: 9, label: "Eylül" },
  { value: 10, label: "Ekim" },
  { value: 11, label: "Kasım" },
  { value: 12, label: "Aralık" },
];

export const days = Array.from({ length: 31 }, (_, i) => ({
  value: i + 1,
  label: String(i + 1),
}));

function BurcForm() {
  return (
    <CalculatorForm
      title="Burç Hesaplama"
      description="Doğum tarihine göre burcunu öğren"
      initialValues={{
        day: "",
        month: "",
      }}
      validate={(formData) => validateRequired(formData, ["day", "month"])}
      calculate={calculateHoroscope}
      fields={[
        {
          name: "day",
          label: "Gün",
          type: "select",
          options: days,
        },
        {
          name: "month",
          label: "Ay",
          type: "select",
          options: months,
        },
      ]}
    />
  );
}

export default BurcForm;
