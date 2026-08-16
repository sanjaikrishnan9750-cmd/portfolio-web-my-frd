import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrolling from "@/components/SmoothScrolling";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-primary" });

export const metadata: Metadata = {
  title: "Prakash A | Data Analyst",
  description: "B.E. CSE Student | Data Analyst | Python & SQL Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} min-h-screen flex flex-col font-sans transition-colors duration-500 selection:bg-accent-1/30 selection:text-accent-1`}>
        <ThemeProvider attribute="data-theme" defaultTheme="classic" themes={["classic", "cyber"]}>
          <SmoothScrolling>
            <CustomCursor />
            <div className="bg-mesh"></div>
            <div className="bg-matrix"></div>
            <div className="noise"></div>
            <Navbar />
            <main className="flex-grow">{children}</main>
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
