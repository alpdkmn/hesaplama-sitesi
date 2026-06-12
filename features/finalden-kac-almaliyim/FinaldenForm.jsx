import { calculateFinalRequired } from "./utils";
import CalculatorForm from "@/components/form/CalculatorForm";

const fields = [
  {
    name: "vize",
    label: "Vize notu",
    type: "text",
  },
  {
    name: "vizeOrani",
    label: "Vize oranı",
    type: "text",
  },
  {
    name: "finalOrani",
    label: "Final oranı",
    type: "number",
  },
  {
    name: "gecmeNotu",
    label: "Geçme notu",
    type: "text",
  },
];
function FinaldenForm({ title }) {
  return (
    <CalculatorForm
      title={title}
      fields={fields}
      initialValues={{
        vize: "",
        vizeOrani: 40,
        finalOrani: 60,
        gecmeNotu: "",
      }}
      calculate={calculateFinalRequired}
      description="Vize ve final notlarınıza göre finalden kaç almanız gerektiğini anında hesaplayın."
    />
  );
}

export default FinaldenForm;
