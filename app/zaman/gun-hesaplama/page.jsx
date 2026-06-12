"use client";
import { Box, Paper } from "@mui/material";
import React from "react";
import GunHesaplamaForm from "../../../features/gun/GunHesaplamaForm";
import { gunHesaplamaContent } from "@/features/gun/content";
import CalculatorPageLayout from "@/components/layouts/CalculatorPageLayout";
import MobileAd from "@/components/Ads/MobileAd";
import FormulaSection from "@/components/FormulaSection";
import ContentSections from "@/components/ContentSections";
import FAQ from "@/components/FAQ";
import { useTheme } from "@mui/material/styles";
function page() {
  const theme = useTheme();
  return (
    <CalculatorPageLayout>
      <GunHesaplamaForm title={gunHesaplamaContent.title} />
      <MobileAd />
      {/* CONTENT */}
      <FormulaSection data={gunHesaplamaContent.formula} />
      <ContentSections sections={gunHesaplamaContent.sections} />
      <FAQ items={gunHesaplamaContent.faq} />
    </CalculatorPageLayout>
  );
}

export default page;
