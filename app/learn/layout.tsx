import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | DattaPay Learn",
    default: "Learn - DattaPay Education Hub",
  },
  description:
    "Learn about stablecoins, USDC, inflation protection, and international payments for freelancers. Educational guides from DattaPay.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function LearnLayout({
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
