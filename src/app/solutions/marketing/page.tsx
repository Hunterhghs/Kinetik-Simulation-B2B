import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Layers, Megaphone, Users2, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing solution",
  description:
    "Activate buying-group signals, orchestrate lifecycle motions, and connect signals to pipeline outcomes with operator-owned measurement.",
};

const blocks = [
  {
    icon: Users2,
    title: "Buying group visibility",
    description:
      "Understand who is active, what changed, and where engagement is concentrating.",
    bullets: ["Stakeholder timelines", "Role & influence hints", "Account-level rollups"],
  },
  {
    icon: Layers,
    title: "Segment activation",
    description:
      "Build segments based on normalized signals, not a patchwork of one-off filters.",
    bullets: ["Reusable definitions", "Signal-based cohorts", "Transparent criteria"],
  },
  {
    icon: Workflow,
    title: "Lifecycle orchestration",
    description:
      "Trigger nurture and outbound motions using rules RevOps can govern.",
    bullets: ["Playbooks & SLAs", "Escalations and exceptions", "Multi-system triggers"],
  },
  {
    icon: BarChart3,
    title: "Pipeline impact measurement",
    description:
      "Measure what changed after workflows ran — with definitions teams can defend.",
    bullets: ["Workflow-level lift", "Reason codes for outcomes", "Attribution sanity checks"],
  },
];

export default function MarketingSolutionPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Solutions · Marketing</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Activate signals without losing measurement and control.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Kinetik helps marketing teams use buying-group and intent signals responsibly —
              with operator-owned definitions and measurable outcomes tied to pipeline.
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
            eyebrow="Orchestration"
            title="Coordinate with RevOps and Sales — without brittle handoffs"
            description="Marketing activation works best when it’s aligned with routing rules, SLAs, and definitions owned by RevOps."
          />
          <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="grid gap-6 md:grid-cols-12 md:items-start">
              <div className="md:col-span-7">
                <h3 className="text-lg font-semibold">Signal-driven lifecycle triggers</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use normalized signals to trigger nurture steps, alert sellers, or open RevOps
                  review queues. Each workflow can be measured and tuned over time.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <Megaphone className="h-4 w-4" />
                  <span>Example: “Buying group expanded — add targeted sequence + notify owner.”</span>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl border border-dashed border-border bg-muted/40 p-6 text-xs text-muted-foreground">
                  UI placeholder: “Segment + workflow builder” screenshot slot.
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
