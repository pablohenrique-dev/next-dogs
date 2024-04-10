import type { Metadata } from "next";
import { Inter, Bitter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Providers } from "@/utils/providers";
import { userGetAction } from "@/actions/user-get";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGetAction();

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${bitter.variable}`}>
        <Providers user={user}>
          <Header />
          <main className="min-h-screen overflow-hidden">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
