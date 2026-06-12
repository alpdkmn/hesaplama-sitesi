"use client";
import React from "react";
import BurcForm from "../../../features/burc/BurcForm";
import { Box } from "@mui/material";
import { burcContent } from "@/features/burc/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

function page() {
  return (
    <CalculatorPageLayout>
      <BurcForm title={burcContent.title} />
      <MobileAd />
      {/* CONTENT */}
      <FormulaSection data={burcContent.formula} />
      <ContentSections sections={burcContent.sections} />
      <FAQ items={burcContent.faq} />
    </CalculatorPageLayout>
  );
}

export default page;
