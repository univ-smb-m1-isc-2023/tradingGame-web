// components/Layout.tsx

import React, { ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        {/* Add your navigation or header here */}
        <main className="flex-1">{children}</main>
        {/* Add your footer here */}
      </div>
    </ThemeProvider>
  );
};

