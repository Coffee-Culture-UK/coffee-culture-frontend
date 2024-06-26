"use client";
import React from "react";
import ThemeProvider from "@/themes/theme-provider";
import { QueryClient, QueryClientProvider } from "react-query";
import NavContextProvider from "./nav";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NavContextProvider>{children}</NavContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
