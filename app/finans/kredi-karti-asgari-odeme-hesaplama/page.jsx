import KrediKartiAsgariForm from "../../../features/kredi-karti-asgari-odeme/KrediKartiAsgariForm";
import { krediKartiAsgariOdemesiContent } from "@/features/kredi-karti-asgari-odeme/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: krediKartiAsgariOdemesiContent.title,
  description: krediKartiAsgariOdemesiContent.description,
};

export default function KrediKartiAsgariPage() {
  return (
    <CalculatorPageLayout>
      <KrediKartiAsgariForm title={krediKartiAsgariOdemesiContent.title} />
      <MobileAd />
      <FormulaSection data={krediKartiAsgariOdemesiContent.formula} />
      <ContentSections sections={krediKartiAsgariOdemesiContent.sections} />
      <FAQ items={krediKartiAsgariOdemesiContent.faq} />
    </CalculatorPageLayout>
  );
}
