import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: "Privacy Policy - DattaPay Data Protection",
  description:
    "Learn how DattaPay collects, uses, and protects your personal information. Our privacy policy covers data security, retention, and your rights.",
  keywords: [
    "DattaPay privacy policy",
    "data protection",
    "user privacy",
    "financial data security",
    "freelancer data privacy",
    "payment platform privacy",
    "GDPR compliance",
    "data retention policy",
  ],
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy - DattaPay Data Protection",
    description:
      "Learn how DattaPay collects, uses, and protects your personal information.",
    url: `${siteUrl}/privacy`,
    type: "website",
    siteName: "DattaPay",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - DattaPay",
    description:
      "Learn how DattaPay collects, uses, and protects your personal information.",
    site: "@dattapay",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 21, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                DattaPay Technologies Inc. ("DattaPay", "we", "us", or "our") is
                committed to protecting your privacy and ensuring the security
                of your personal information. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when
                you use our B2B cross-border payment platform and services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using our services, you consent to the data practices
                described in this policy. If you do not agree with our policies
                and practices, please do not use our services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                2.1 Business Information
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Company name, registration number, and tax identification
                  numbers (EIN/PAN)
                </li>
                <li>Business address and contact information</li>
                <li>Nature of business and industry classification</li>
                <li>Annual revenue and transaction volumes</li>
                <li>Corporate bank account details</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                2.2 Personal Information
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Name, email address, and phone number of authorized
                  representatives
                </li>
                <li>Government-issued identification documents</li>
                <li>Proof of address and authorization documents</li>
                <li>
                  Beneficial ownership information (for owners with 25% or more
                  stake)
                </li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                2.3 Transaction Information
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Payment details, amounts, and currencies</li>
                <li>Beneficiary information and purpose codes</li>
                <li>Transaction history and patterns</li>
                <li>Source of funds documentation</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                2.4 Technical Information
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>IP address, browser type, and device information</li>
                <li>Login data and access times</li>
                <li>Platform usage data and preferences</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong className="text-foreground">Service Delivery:</strong>{" "}
                  To process your transactions, verify your identity, and
                  provide our payment services
                </li>
                <li>
                  <strong className="text-foreground">Compliance:</strong> To
                  comply with anti-money laundering (AML), know your customer
                  (KYC), and other regulatory requirements
                </li>
                <li>
                  <strong className="text-foreground">Risk Management:</strong>{" "}
                  To assess and mitigate fraud, money laundering, and other
                  financial crimes
                </li>
                <li>
                  <strong className="text-foreground">Communication:</strong> To
                  send transaction confirmations, account updates, and important
                  notices
                </li>
                <li>
                  <strong className="text-foreground">Improvement:</strong> To
                  enhance our services, develop new features, and improve user
                  experience
                </li>
                <li>
                  <strong className="text-foreground">Legal Obligations:</strong>{" "}
                  To comply with court orders, legal processes, and regulatory
                  requests
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information with:
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                4.1 Service Providers
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Banking partners and financial institutions</li>
                <li>Identity verification and compliance service providers</li>
                <li>Cloud storage and hosting providers</li>
                <li>Professional service providers (auditors, legal advisors)</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                4.2 Regulatory Authorities
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Financial Crimes Enforcement Network (FinCEN)</li>
                <li>Office of Foreign Assets Control (OFAC)</li>
                <li>Reserve Bank of India (RBI)</li>
                <li>Other relevant regulatory bodies</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
                4.3 Business Transfers
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred to the acquiring entity.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement industry-standard security measures including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>256-bit SSL encryption for data transmission</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security audits and penetration testing</li>
                <li>Restricted access controls and employee training</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Compliance with PCI DSS standards</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your information for as long as necessary to provide
                our services and comply with legal obligations. Specifically:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Transaction records: Minimum 5 years as required by law</li>
                <li>
                  KYC documentation: Duration of business relationship plus 5
                  years
                </li>
                <li>Communication records: 3 years</li>
                <li>Technical logs: 1 year</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>
                  Request deletion of your data (subject to legal requirements)
                </li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a cross-border payment platform, we transfer data between the
                United States, India, and other countries where we operate. We
                ensure appropriate safeguards are in place including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Standard contractual clauses approved by regulatory authorities
                </li>
                <li>Adequacy decisions where applicable</li>
                <li>Your explicit consent for specific transfers</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Cookie Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your
                experience, analyze usage patterns, and improve our services.
                You can manage cookie preferences through your browser settings.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under 18 years of
                age. We do not knowingly collect personal information from
                children.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Updates to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. We will notify
                you of material changes via email or through our platform. Your
                continued use of our services after such modifications
                constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about this Privacy Policy or our data practices,
                please contact us at:
              </p>
              <div className="bg-secondary/50 rounded-xl p-6">
                <p className="font-semibold text-foreground">
                  DattaPay Technologies Inc.
                </p>
                <p className="text-muted-foreground mt-2">
                  Email:{" "}
                  <a
                    href="mailto:support@dattapay.com"
                    className="text-primary hover:underline"
                  >
                    support@dattapay.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
