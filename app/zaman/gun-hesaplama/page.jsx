import GunHesaplamaForm from "../../../features/gun/GunHesaplamaForm";
import { gunHesaplamaContent } from "@/features/gun/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: gunHesaplamaContent.title,
  description: gunHesaplamaContent.description,
};

export default function GunPage() {
  return (
    <CalculatorPageLayout>
      <GunHesaplamaForm title={gunHesaplamaContent.title} />
      <MobileAd />
      <FormulaSection data={gunHesaplamaContent.formula} />
      <ContentSections sections={gunHesaplamaContent.sections} />
      <FAQ items={gunHesaplamaContent.faq} />
    </CalculatorPageLayout>
  );
}
