import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PlatformLogos from "@/components/platform-logos";
import DashboardVisual from "@/components/dashboard-visual/dashboard-visual";
import Testimonials from "@/components/landing/testimonial";
import KeepMore from "@/components/keep-more";
import YieldSection from "@/components/yield-section";
import BlogsSection from "@/components/blogs-section";
import HowItWorks from "@/components/how-it-works";
import FAQ from "@/components/faq";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "DattaPay: Payoneer Alternative for Freelancers | 0.5% Fees + 3-4% APY",
  description:
    "Get a US bank account in 2 minutes. Receive from Upwork, Fiverr, Freelancer — pay just 0.5% instead of Payoneer's 3-5%. Earn 3-4% APY on idle funds backed by US Treasury Bills. Zero annual fees.",
  keywords: [
    "DattaPay",
    "Payoneer alternative",
    "Payoneer alternative 2026",
    "US bank account freelancer",
    "instant funding account",
    "USDC freelancer payment",
    "stablecoin yield APY",
    "Treasury Bills yield freelancer",
    "Fiverr withdrawal low fees",
    "Upwork payment alternative",
    "stablecoin payments",
    "earn yield on freelance income",
    "remittance low fees",
    "international payments freelancer",
    "zero annual fee payment",
    "freelancer payment platform",
  ],
  alternates: {
    canonical: "https://dattapay.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DashboardVisual />
        <PlatformLogos />
        <KeepMore />
        <YieldSection />
        <Testimonials />
        <BlogsSection />
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
