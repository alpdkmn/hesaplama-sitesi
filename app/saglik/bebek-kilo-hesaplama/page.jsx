"use client";
import { Box } from "@mui/material";
import React from "react";
import BebekKiloForm from "../../../features/bebek-kilo/BebekKiloForm";
import { bebekKiloContent } from "@/features/bebek-kilo/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

function page() {
  return (
    <CalculatorPageLayout>
      <BebekKiloForm title={bebekKiloContent.title} />
      <MobileAd />
      {/* CONTENT */}
      <FormulaSection data={bebekKiloContent.formula} />
      <ContentSections sections={bebekKiloContent.sections} />
      <FAQ items={bebekKiloContent.faq} />
    </CalculatorPageLayout>
  );
}

export default page;
