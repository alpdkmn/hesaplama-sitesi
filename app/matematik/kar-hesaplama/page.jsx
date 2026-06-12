"use client";
import { Box } from "@mui/material";
import React from "react";
import KarForm from "../../../features/kar/KarForm";
import { karHesaplamaContent } from "@/features/kar/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";

function page() {
  return (
    <CalculatorPageLayout>
      <KarForm title={karHesaplamaContent.title} />

      <MobileAd />
      {/* CONTENT */}
      <FormulaSection data={karHesaplamaContent.formula} />
      <ContentSections sections={karHesaplamaContent.sections} />
      <FAQ items={karHesaplamaContent.faq} />
    </CalculatorPageLayout>
  );
}

export default page;
