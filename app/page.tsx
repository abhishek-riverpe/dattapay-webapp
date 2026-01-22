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
  title: "DattaPay - International Payments for Freelancers",
  description:
    "Get paid in USD/EUR with just 0.5% flat fee. Earn 4.2% APY on idle funds. Bank-grade security & compliance. Join 5,000+ freelancers saving $847/year on fees.",
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
