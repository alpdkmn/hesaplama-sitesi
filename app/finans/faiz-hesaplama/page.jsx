"use client";
import FaizForm from "@/features/faiz/FaizForm";
import { faizContent } from "@/features/faiz/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

function FaizPage() {
  return (
    <CalculatorPageLayout>
      <FaizForm title={faizContent.title} />

      <MobileAd />

      {/* CONTENT */}
      <FormulaSection data={faizContent.formula} />
      <ContentSections sections={faizContent.sections} />
      <FAQ items={faizContent.faq} />
    </CalculatorPageLayout>
  );
}

export default FaizPage;
