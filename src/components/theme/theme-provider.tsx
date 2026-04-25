import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type ThemeProviderWrapperProps = {
  children: ReactNode;
};

 const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem  disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
