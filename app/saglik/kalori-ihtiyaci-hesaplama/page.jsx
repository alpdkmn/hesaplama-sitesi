import BmrForm from "../../../features/kalori-ihtiyaci/BmrForm";
import { kaloriIhtiyaciContent } from "@/features/kalori-ihtiyaci/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: kaloriIhtiyaciContent.title,
  description: kaloriIhtiyaciContent.description,
};

export default function KaloriIhtiyaciPage() {
  return (
    <CalculatorPageLayout>
      <BmrForm title={kaloriIhtiyaciContent.title} />
      <MobileAd />
      <FormulaSection data={kaloriIhtiyaciContent.formula} />
      <ContentSections sections={kaloriIhtiyaciContent.sections} />
      <FAQ items={kaloriIhtiyaciContent.faq} />
    </CalculatorPageLayout>
  );
}
