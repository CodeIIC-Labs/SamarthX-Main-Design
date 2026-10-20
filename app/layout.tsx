import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SamarthX | India's Connected School Governance Ecosystem",
    template: "%s | SamarthX",
  },
  description:
    "SamarthX brings governance, administration, people and student journeys into one secure digital platform helping education teams move faster and make better decisions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="site-main flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
