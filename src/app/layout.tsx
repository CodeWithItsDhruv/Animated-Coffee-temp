import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUMIÈRE COFFEE | Premium Iced Coffee",
  description: "Experience the art of artisanal coffee brewing. Cinematic flavor in every sip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <AppProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </AppProvider>
      </body>
    </html>
  );
}
