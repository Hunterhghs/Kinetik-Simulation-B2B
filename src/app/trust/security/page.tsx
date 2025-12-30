import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { KeyRound, Lock, ShieldCheck, UserCog, FileClock } from "lucide-react";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Kinetik security posture (placeholders): SSO/SAML, RBAC, encryption, audit logs, and SOC 2 readiness.",
};

const items = [
  {
    icon: KeyRound,
    title: "SSO / SAML (planned)",
    description:
      "Enterprise authentication patterns for controlled access and centralized identity management.",
  },
  {
    icon: UserCog,
    title: "RBAC (planned)",
    description:
      "Role-based access control aligned to operator workflows (RevOps admins, read-only, etc.).",
  },
  {
    icon: Lock,
    title: "Encryption",
    description:
      "Encryption in transit (TLS) and at rest (provider-managed). Replace with your specific implementation details.",
  },
  {
    icon: FileClock,
    title: "Audit logs (planned)",
    description:
      "Track changes to definitions, routing rules, and scoring thresholds over time.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 (in progress / planned)",
    description:
      "Use this space to communicate your SOC 2 timeline and controls. Keep wording accurate.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Trust · Security</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Security posture built for enterprise expectations.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Buyers need clarity on security and governance early. This page is a structured placeholder —
              replace each section with verified, approved language.
            </p>
          </div>

          <div className="mt-12">
            <SectionHeading
              title="Controls and practices"
              description="Mark items as “available” only when implemented and validated."
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
                      Placeholder — confirm implementation and update with precise details.
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
