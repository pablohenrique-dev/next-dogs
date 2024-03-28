import type { Metadata } from "next";
import { Inter, Bitter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Next Dogs",
  description: "Uma rede social para cachorros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bitter.variable}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
