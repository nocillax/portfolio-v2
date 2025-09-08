import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { UniversalCursor } from "@/components/background";

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Web Developer",
  description:
    "Portfolio website showcasing my projects and skills as a Full Stack Web Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        <ThemeProvider>
          {children}
          <UniversalCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
