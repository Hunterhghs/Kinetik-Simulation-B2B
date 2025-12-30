import { Container } from "@/components/container";
import { ButtonLink } from "@/components/ui/button";

export function CTASection({
  title = "See Kinetik on your data",
  description = "We’ll map your existing signals, define operator controls, and stand up a measurable workflow — without disrupting your stack.",
  primaryHref = "/demo",
  primaryLabel = "Book a demo",
  secondaryHref = "/integrations",
  secondaryLabel = "Explore integrations",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <ButtonLink href={primaryHref} size="lg">
                {primaryLabel}
              </ButtonLink>
              <ButtonLink href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </ButtonLink>
              <p className="text-xs text-muted-foreground">
                No hard sell. Clear evaluation plan.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
