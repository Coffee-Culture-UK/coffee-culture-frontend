"use client";

import React from "react";
import ThemeProvider from "@/themes/theme-provider";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;