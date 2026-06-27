import { calculateVizeFinal } from "./utils";
import CalculatorForm from "@/components/form/CalculatorForm";
import validateRequired from "@/lib/validation/validateRequired";

const fields = [
  {
    name: "vize",
    label: "Vize Notu",
    type: "text",
  },
  {
    name: "vizeOrani",
    label: "Vize Oranı (%)",
    type: "text",
  },
  {
    name: "final",
    label: "Final Notu",
    type: "text",
  },
  {
    name: "finalOrani",
    label: "Final Oranı (%)",
    type: "text",
  },
];
function VizeFinalForm({ title }) {
  return (
    <CalculatorForm
      title={title}
      fields={fields}
      initialValues={{
        vize: "",
        vizeOrani: 40,
        final: "",
        finalOrani: 60,
      }}
      calculate={calculateVizeFinal}
      description="Vize ve final notlarınızı girerek ders not ortalamanızı hesaplayın."
    />
  );
}

export default VizeFinalForm;
