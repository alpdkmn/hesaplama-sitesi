"use client";
import React from "react";
import BmrForm from "../../../features/kalori-ihtiyaci/BmrForm";
import { Box } from "@mui/material";
import { kaloriIhtiyaciContent } from "@/features/kalori-ihtiyaci/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

function page() {
  return (
    <CalculatorPageLayout>
      <BmrForm title={kaloriIhtiyaciContent.title} />
      <MobileAd />
      {/* CONTENT */}
      <FormulaSection data={kaloriIhtiyaciContent.formula} />
      <ContentSections sections={kaloriIhtiyaciContent.sections} />
      <FAQ items={kaloriIhtiyaciContent.faq} />
    </CalculatorPageLayout>
  );
}

export default page;
