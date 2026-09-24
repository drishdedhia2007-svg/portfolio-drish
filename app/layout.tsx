import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Drish Dedhia | Mechanical Engineering Portfolio",
    template: "%s | Drish Dedhia",
  },
  description:
    "Drish Dedhia's mechanical engineering portfolio: experience, CAD projects, research papers, competitions, and current work at RWTH Aachen.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
