import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PlatformLogos from "@/components/platform-logos";
import DashboardVisual from "@/components/dashboard-visual/dashboard-visual";
import Testimonials from "@/components/landing/testimonial";
import KeepMore from "@/components/keep-more";
import BlogsSection from "@/components/blogs-section";
import HowItWorks from "@/components/how-it-works";
import FAQ from "@/components/faq";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "DattaPay - Stop Paying Payoneer's $35/Year + $3/Withdrawal Fees | Instant Funding Account",
  description:
    "Get instant funding account + crypto wallet in 2 minutes. Receive from Fiverr, Upwork, Freelancer — auto-convert to USDT/USDC. Sell on Binance at premium rates. Zero annual fees. Perfect for freelancers and remittances.",
  keywords: [
    "DattaPay",
    "Payoneer alternative",
    "Payoneer alternative 2026",
    "funding account freelancer",
    "instant funding account",
    "USDT freelancer payment",
    "USDC freelancer payment",
    "crypto wallet freelancer",
    "Fiverr withdrawal no fees",
    "Upwork payment USDT",
    "stablecoin payments",
    "Binance P2P freelancer",
    "Binance P2P premium rates",
    "remittance low fees",
    "international payments freelancer",
    "auto convert USDT USDC",
    "zero annual fee payment",
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
