import type { Metadata } from "next";
import { Satisfy, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/website/Navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingScreen from "@/components/LoadingScreen";
import { Suspense } from "react";
import CursorFollower from "@/components/CursorFollower";

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Ahmed Raza Portfolio – Web Design, Development &amp; Creative Solutions",
  description:
    "Explore Ahmed Raza portfolio showcasing innovative web design, development expertise, and creative digital solutions. Discover personalized and professional work that delivers results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satisfy.variable} ${montserrat.variable} font-mono antialiased`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <Suspense>
              <main>
                <LoadingScreen />
                <CursorFollower />
                <Navbar />
                {children}
              </main>
            </Suspense>
          </TooltipProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
