import BurcForm from "../../../features/burc/BurcForm";
import { burcContent } from "@/features/burc/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: burcContent.title,
  description: burcContent.description,
};

export default function BurcPage() {
  return (
    <CalculatorPageLayout>
      <BurcForm title={burcContent.title} />
      <MobileAd />
      <FormulaSection data={burcContent.formula} />
      <ContentSections sections={burcContent.sections} />
      <FAQ items={burcContent.faq} />
    </CalculatorPageLayout>
  );
}
