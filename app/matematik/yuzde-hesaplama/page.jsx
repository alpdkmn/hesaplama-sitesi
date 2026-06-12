"use client";
import { Box } from "@mui/material";
import React from "react";
import YuzdeForm from "../../../features/yuzde/YuzdeForm";
import { yuzdeHesaplamaContent } from "@/features/yuzde/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

function page() {
  return (
    <CalculatorPageLayout>
      <YuzdeForm title={yuzdeHesaplamaContent.title} />
      <MobileAd />
      {/* CONTENT */}
      <FormulaSection data={yuzdeHesaplamaContent.formula} />
      <ContentSections sections={yuzdeHesaplamaContent.sections} />
      <FAQ items={yuzdeHesaplamaContent.faq} />
    </CalculatorPageLayout>
  );
}

export default page;
