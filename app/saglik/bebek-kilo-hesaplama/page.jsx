import BebekKiloForm from "../../../features/bebek-kilo/BebekKiloForm";
import { bebekKiloContent } from "@/features/bebek-kilo/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: bebekKiloContent.title,
  description: bebekKiloContent.description,
};

export default function BebekKiloPage() {
  return (
    <CalculatorPageLayout>
      <BebekKiloForm title={bebekKiloContent.title} />
      <MobileAd />
      <FormulaSection data={bebekKiloContent.formula} />
      <ContentSections sections={bebekKiloContent.sections} />
      <FAQ items={bebekKiloContent.faq} />
    </CalculatorPageLayout>
  );
}
