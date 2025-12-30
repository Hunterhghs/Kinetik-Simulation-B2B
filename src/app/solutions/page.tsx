import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, Megaphone, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Role-based solutions for RevOps, Sales, and Marketing — powered by a signals → intelligence → action platform.",
};

const solutions = [
  {
    title: "RevOps",
    href: "/solutions/revops",
    icon: Settings,
    description:
      "Govern signal-based workflows, enforce SLAs, and make measurement defensible across teams.",
    bullets: ["Pipeline hygiene", "Routing governance", "SLA enforcement", "Attribution sanity"],
  },
  {
    title: "Sales",
    href: "/solutions/sales",
    icon: Briefcase,
    description:
      "Help reps focus on the accounts and moments that matter — with explainable prioritization.",
    bullets: ["Account prioritization", "Timing cues", "Territory focus", "Context packs"],
  },
  {
    title: "Marketing",
    href: "/solutions/marketing",
    icon: Megaphone,
    description:
      "Activate buying-group signals, orchestrate lifecycle motions, and connect to pipeline outcomes.",
    bullets: ["Buying group visibility", "Segment activation", "Lifecycle orchestration", "Pipeline impact"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Solutions</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Designed for how enterprise teams operate.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Kinetik supports operator-owned definitions, cross-system signals, and governed workflows.
              Choose the path that matches your team’s priorities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                        <Icon className="h-4 w-4" />
                      </div>
                      <Link
                        href={s.href}
                        className="inline-flex items-center text-sm font-medium text-primary underline underline-offset-4"
                      >
                        View <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <CardTitle className="text-base">{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {s.bullets.map((b) => (
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

      <CTASection />
    </>
  );
}
