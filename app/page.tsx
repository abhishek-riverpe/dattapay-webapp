import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PlatformLogos from "@/components/platform-logos";
import DashboardVisual from "@/components/dashboard-visual/dashboard-visual";
import Testimonials from "@/components/landing/testimonial";
import KeepMore from "@/components/keep-more";
import HowItWorks from "@/components/how-it-works";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

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
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
