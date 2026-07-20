import KarForm from "../../../features/kar/KarForm";
import { karHesaplamaContent } from "@/features/kar/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: karHesaplamaContent.title,
  description: karHesaplamaContent.description,
};

export default function KarPage() {
  return (
    <CalculatorPageLayout>
      <KarForm title={karHesaplamaContent.title} />
      <MobileAd />
      <FormulaSection data={karHesaplamaContent.formula} />
      <ContentSections sections={karHesaplamaContent.sections} />
      <FAQ items={karHesaplamaContent.faq} />
    </CalculatorPageLayout>
  );
}
