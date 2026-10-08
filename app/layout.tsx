import type { Metadata } from "next";
import "./globals.css";
import "./refinement.css";
import "./rework.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-drish.vercel.app"),
  title: {
    default: "Drish Dedhia | Mechanical Engineering Portfolio",
    template: "%s | Drish Dedhia",
  },
  description:
    "Drish Dedhia's mechanical engineering portfolio: experience, CAD projects, research papers, competitions, and current work at RWTH Aachen.",
  openGraph: {
    title: "Mechanical Engineering Portfolio | Drish Dedhia",
    description: "The ideas, the wrong turns, and what I learned through CAD, research, and workshop projects at RWTH Aachen.",
    images: [{ url: "/brand/linkedin-portfolio-thumbnail.png?v=editorial-engineering", width: 1200, height: 630, alt: "Drish Dedhia — Engineering Portfolio" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.dataset.theme=localStorage.getItem('drish-portfolio-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}" }} /></head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
