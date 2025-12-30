import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { FileText, Globe, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Compliance readiness placeholders for enterprise buyers: GDPR/CCPA posture, subprocessors, and documentation expectations.",
};

const items = [
  {
    icon: Globe,
    title: "GDPR / international readiness",
    description:
      "Document data processing roles, lawful basis, DPA availability, and cross-border transfer mechanisms as applicable.",
  },
  {
    icon: Scale,
    title: "CCPA/CPRA readiness",
    description:
      "Clarify personal information handling, opt-out mechanisms, and service provider language where relevant.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Provide security and privacy documentation (SOC reports, pen test summaries, subprocessors, data flow diagrams) as available.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Trust · Compliance</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Compliance posture, clearly communicated.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              This page is intentionally conservative: it’s structured to support enterprise procurement
              without making claims you can’t substantiate. Replace placeholders with approved language.
            </p>
          </div>

          <div className="mt-12">
            <SectionHeading
              title="What enterprise buyers typically ask for"
              description="Add links to real policies, DPAs, and reports as they become available."
            />
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {items.map((i) => {
                const Icon = i.icon;
                return (
                  <Card key={i.title} className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                          <Icon className="h-4 w-4" />
                        </div>
                        <CardTitle className="text-base">{i.title}</CardTitle>
                      </div>
                      <CardDescription>{i.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      Placeholder — validate with legal/compliance teams before publishing.
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
