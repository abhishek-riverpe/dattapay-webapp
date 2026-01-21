import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PlatformLogos from "@/components/platform-logos";
import DashboardVisual from "@/components/dashboard-visual/dashboard-visual";
import Testimonials from "@/components/landing/testimonial";
import KeepMore from "@/components/keep-more";
import HowItWorks from "@/components/how-it-works";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "DattaPay | Get Paid in USD - 0.5% Fees | Freelancer Payments",
  description:
    "Receive USD payments with just 0.5% fees. Earn 4.2% APY on idle funds. Protect your earnings from inflation. Trusted by 5,000+ freelancers in Africa & LATAM.",
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
        <HowItWorks />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
