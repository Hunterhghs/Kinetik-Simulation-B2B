import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { EyeOff, Shield, TimerReset, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy posture placeholders: data minimization, consent, retention, and transparency for enterprise signal intelligence.",
};

const items = [
  {
    icon: EyeOff,
    title: "Data minimization",
    description:
      "Collect only what’s required to run the workflow and measure outcomes. Avoid unnecessary sensitive fields.",
  },
  {
    icon: Shield,
    title: "Consent and lawful basis",
    description:
      "Document how you handle consent and lawful basis across regions and signal sources.",
  },
  {
    icon: TimerReset,
    title: "Retention policies",
    description:
      "Define retention windows for raw events and derived outputs. Make it configurable for enterprise customers.",
  },
  {
    icon: Trash2,
    title: "Deletion and portability",
    description:
      "Provide mechanisms for deletion and portability requests where applicable (GDPR/CCPA).",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Trust · Privacy</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Privacy-first posture for signal intelligence.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Enterprise teams need confidence in how data is collected, processed, retained, and deleted.
              This page provides structure — replace placeholders with your verified policy.
            </p>
          </div>

          <div className="mt-12">
            <SectionHeading
              title="Principles"
              description="Keep language precise. Avoid claims that aren’t backed by policy and implementation."
            />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
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
                      Placeholder — replace with policy language reviewed by counsel.
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
