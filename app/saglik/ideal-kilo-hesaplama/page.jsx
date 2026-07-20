import IdealKiloForm from "@/features/ideal-kilo/IdealKiloForm";
import { idealKiloContent } from "@/features/ideal-kilo/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: idealKiloContent.title,
  description: idealKiloContent.description,
};

export default function IdealKiloPage() {
  return (
    <CalculatorPageLayout>
      <IdealKiloForm title={idealKiloContent.title} />
      <MobileAd />
      <FormulaSection data={idealKiloContent.formula} />
      <ContentSections sections={idealKiloContent.sections} />
      <FAQ items={idealKiloContent.faq} />
    </CalculatorPageLayout>
  );
}
