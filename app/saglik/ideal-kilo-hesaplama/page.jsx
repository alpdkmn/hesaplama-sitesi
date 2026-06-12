"use client";
import { Box } from "@mui/material";
import React from "react";
import IdealKiloForm from "@/features/ideal-kilo/IdealKiloForm";
import { idealKiloContent } from "@/features/ideal-kilo/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

function page() {
  return (
    <CalculatorPageLayout>
      <IdealKiloForm title={idealKiloContent.title} />
      <MobileAd />
      {/* CONTENT */}
      <FormulaSection data={idealKiloContent.formula} />
      <ContentSections sections={idealKiloContent.sections} />
      <FAQ items={idealKiloContent.faq} />
    </CalculatorPageLayout>
  );
}

export default page;
