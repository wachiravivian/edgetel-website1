import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export const metadata: Metadata = {
  title: "Edgetel | Blazing Fast Internet in Kenya",
  description:
    "Affordable, high-speed fibre and wireless internet packages for homes and businesses across Kenya. Starting from KES 2,000/month.",
  keywords: ["internet kenya", "fibre internet", "edgetel", "fast internet kenya", "home internet"],
  openGraph: {
    title: "Edgetel | Blazing Fast Internet",
    description: "Get connected with Kenya's fastest home internet. Plans from KES 2,000/month.",
    url: "https://www.edgetel.co.ke",
    siteName: "Edgetel",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
