import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { setThemeScript } from "@/utils/setThemeScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laxman Jonchhen Portfolio",
  description: "Frontend Developer Portfolio Laxman Jonchhen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
