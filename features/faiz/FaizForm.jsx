import CalculatorForm from "@/components/form/CalculatorForm";
import { calculateInterest } from "./utils";
const fields = [
  {
    name: "amount",
    label: "Tutar (₺)",
    type: "text",
  },
  {
    name: "rate",
    label: "Yıllık Faiz Oranı (%)",
    type: "text",
  },
  {
    name: "month",
    label: "Vade (Ay)",
    type: "number",
  },
  {
    name: "interestType",
    type: "radio",
    options: [
      {
        label: "Basit faiz",
        value: "simple",
      },
      {
        label: "Bileşik faiz",
        value: "compound",
      },
    ],
  },
];
function FaizForm({ title }) {
  return (
    <CalculatorForm
      title={title}
      fields={fields}
      initialValues={{
        amount: "",
        rate: "",
        month: "",
        interestType: "simple",
      }}
      calculate={calculateInterest}
      descriptionResolver={(formData) =>
        formData.interestType === "simple"
          ? "Anapara, faiz oranı ve vadeye göre basit faiz hesaplayın."
          : "Anapara, faiz oranı ve vadeye göre bileşik faiz hesaplayın."
      }
    />
  );
}

export default FaizForm;
