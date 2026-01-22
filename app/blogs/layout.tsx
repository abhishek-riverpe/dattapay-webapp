import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | DattaPay Blogs",
    default: "Blogs - DattaPay Resources & Guides",
  },
  description:
    "Explore guides, comparisons, and resources for freelancers. Learn about payments, platforms, and strategies for international freelancing.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogsLayout({
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
