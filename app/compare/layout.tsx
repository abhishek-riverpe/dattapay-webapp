import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | DattaPay Comparison",
    default: "Compare DattaPay | Payment Platform Comparisons",
  },
  description:
    "Compare DattaPay with other payment platforms. See how we stack up against Payoneer, Wise, Grey, and PayPal for freelancer payments.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
