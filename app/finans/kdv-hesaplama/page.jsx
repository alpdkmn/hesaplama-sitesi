import KdvForm from "@/features/kdv/KdvForm";
import { kdvContent } from "@/features/kdv/content";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";

export const metadata = {
  title: kdvContent.title,
  description: kdvContent.description,
};

export default function KDVPage() {
  return (
    <CalculatorPageLayout>
      {/* FORM */}
      <KdvForm title={kdvContent.title} />

      {/* MOBILE ADS (istersen burada kalır) */}
      <MobileAd />

      {/* CONTENT */}
      <FormulaSection data={kdvContent.formula} />
      <ContentSections sections={kdvContent.sections} />
      <FAQ items={kdvContent.faq} />
    </CalculatorPageLayout>
  );
}
