import VizeFinalForm from "../../../features/vize-final/VizeFinalForm";
import { vizeFinalContent } from "@/features/vize-final/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: vizeFinalContent.title,
  description: vizeFinalContent.description,
};

export default function VizeFinalPage() {
  return (
    <CalculatorPageLayout>
      <VizeFinalForm title={vizeFinalContent.title} />
      <MobileAd />
      <FormulaSection data={vizeFinalContent.formula} />
      <ContentSections sections={vizeFinalContent.sections} />
      <FAQ items={vizeFinalContent.faq} />
    </CalculatorPageLayout>
  );
}
