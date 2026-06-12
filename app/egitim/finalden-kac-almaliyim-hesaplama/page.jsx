"use client";
import React from "react";
import FinaldenForm from "../../../features/finalden-kac-almaliyim/FinaldenForm";
import { finalNotuContent } from "@/features/finalden-kac-almaliyim/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

function page() {
  return (
    <CalculatorPageLayout>
      <FinaldenForm title={finalNotuContent.title} />
      <MobileAd />
      {/* CONTENT */}
      <FormulaSection data={finalNotuContent.formula} />
      <ContentSections sections={finalNotuContent.sections} />
      <FAQ items={finalNotuContent.faq} />
    </CalculatorPageLayout>
  );
}

export default page;
