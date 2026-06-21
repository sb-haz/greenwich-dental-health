import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/content";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Private Dentist in Greenwich, London`,
    template: `%s | ${site.name}`,
  },
  description:
    "Award-winning private dentistry near Cutty Sark. Invisalign, implants, whitening, and family dentistry.",
  metadataBase: new URL("https://www.greenwichdentalhealth.co.uk"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} h-full bg-brand-dark antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BookConsultationButton />
      </body>
    </html>
  );
}
