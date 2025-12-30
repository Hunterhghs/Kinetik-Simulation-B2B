import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Compass, FileText, Target, Timer } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales solution",
  description:
    "Prioritize accounts and timing with explainable signal intelligence — and push actions into the systems sellers already use.",
};

const blocks = [
  {
    icon: Target,
    title: "Prioritization you can trust",
    description:
      "Score accounts with transparent thresholds and reason codes so reps know what changed.",
    bullets: ["Multi-signal scoring", "Time decay + dedupe", "Explainable reason codes"],
  },
  {
    icon: Timer,
    title: "Timing cues",
    description:
      "Detect meaningful shifts (not noise) and route work at the moment it matters.",
    bullets: ["Change detection", "Coverage gaps surfaced", "Alerting with context"],
  },
  {
    icon: FileText,
    title: "Account context packs",
    description:
      "Give sellers a tight summary of what’s happening across stakeholders and systems.",
    bullets: ["Stakeholder activity timeline", "Signal sources shown", "Suggested next steps"],
  },
  {
    icon: Compass,
    title: "Territory focus",
    description:
      "Use signal density to validate territory decisions and focus where there’s movement.",
    bullets: ["Signal distribution by segment", "Territory exceptions", "Capacity alignment"],
  },
];

export default function SalesSolutionPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Solutions · Sales</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Help sellers focus on the accounts that are changing now.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Kinetik turns signals into explainable priorities and routes actions back into
              your CRM and messaging tools — so sellers spend less time guessing and more time executing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blocks.map((b) => {
              const Icon = b.icon;
              return (
                <Card key={b.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                        <Icon className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-base">{b.title}</CardTitle>
                    </div>
                    <CardDescription>{b.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {b.bullets.map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Execution"
            title="Actions that fit how sellers already work"
            description="Kinetik is designed to push context into the tools your team lives in — not to create yet another destination dashboard."
          />
          <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="grid gap-6 md:grid-cols-12 md:items-start">
              <div className="md:col-span-7">
                <h3 className="text-lg font-semibold">From signals to workflow</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Trigger sequences, tasks, and alerts based on governed definitions. Every action
                  can include a compact “why now” summary that helps sellers act quickly and confidently.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>Example: “Priority account — new stakeholder + product usage spike.”</span>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl border border-dashed border-border bg-muted/40 p-6 text-xs text-muted-foreground">
                  UI placeholder: “Seller alert + context panel” screenshot slot.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
