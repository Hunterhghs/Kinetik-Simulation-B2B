import { Container } from "@/components/container";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Hero({
  title,
  subtitle,
  primaryCtaHref = "/demo",
  primaryCtaLabel = "Book a demo",
  secondaryCtaHref = "/demo#tour",
  secondaryCtaLabel = "Watch 90-sec tour",
  className,
}: {
  title: string;
  subtitle: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  className?: string;
}) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container className="grid gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <p className="mb-4 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Signals → Intelligence → Action
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryCtaHref} size="lg">
              {primaryCtaLabel} <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={secondaryCtaHref} variant="secondary" size="lg">
              {secondaryCtaLabel}
            </ButtonLink>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Designed for enterprise RevOps: transparent scoring, operator controls, and
            audit-ready workflows.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Signal feed</p>
              <p className="text-xs text-muted-foreground">UI placeholder</p>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Account shows renewed intent", "Web + content consumption spikes"],
                ["Buying group expands", "New stakeholder detected in email thread"],
                ["Routing exception", "Territory rule conflict flagged"],
                ["Stage quality risk", "Rep activity not matching stage"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-lg border border-border bg-background p-3"
                >
                  <div className="text-sm font-medium">{a}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-dashed border-border bg-muted/40 p-4 text-xs text-muted-foreground">
              Replace this block with real product screenshots once available.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
