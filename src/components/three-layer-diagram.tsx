import { Container } from "@/components/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { Activity, Brain, Workflow } from "lucide-react";

const layers = [
  {
    icon: Activity,
    title: "Signal layer",
    desc: "Collect and normalize messy enterprise signals across systems — with provenance, dedupe, and time decay.",
    bullets: [
      "CRM + activity signals",
      "Web + content engagement",
      "Email + calendar engagement",
      "Product usage and lifecycle events",
      "Firmographics + enrichment",
    ],
  },
  {
    icon: Brain,
    title: "Intelligence layer",
    desc: "Turn signals into explainable scoring, buying group visibility, and next-best actions your operators can trust.",
    bullets: [
      "Transparent scoring & thresholds",
      "Buying group inference",
      "False-positive controls",
      "Reason codes + audit trail",
      "Measurement-ready outputs",
    ],
  },
  {
    icon: Workflow,
    title: "Action layer",
    desc: "Route, alert, and orchestrate workflows across your stack — with SLAs, governance, and exception handling.",
    bullets: [
      "Routing and assignment",
      "Alerting (Slack/email)",
      "Playbooks & orchestration",
      "SLA enforcement",
      "Workflow analytics",
    ],
  },
];

export function ThreeLayerDiagram() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A three-layer system built for RevOps reality"
          description="Signals are only valuable if they are reliable, explainable, and operationalized inside the tools your teams already use."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {layers.map((l) => {
            const Icon = l.icon;
            return (
              <Card key={l.title} className="relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-primary/80" />
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                      <Icon className="h-4 w-4" />
                    </div>
                    <CardTitle>{l.title}</CardTitle>
                  </div>
                  <CardDescription>{l.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {l.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{b}</span>
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
  );
}
