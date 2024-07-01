import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./css/globals.scss";
import c from "./css/page.module.scss";
import Header from "./components/Header/Header";

const inter = Mulish({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Шаблоны документов",
  description: "Создавайте шаблоны процессуальных документов легко",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" id='html' >
      <body className={inter.className}>
        <Header />
        <div className={c.layout}>
          {children}
        </div>
      </body>
    </html>
  );
}
