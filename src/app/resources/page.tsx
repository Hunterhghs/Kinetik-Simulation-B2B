import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { ResourceCard } from "@/components/resource-card";
import { listAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Blog posts, guides, and benchmarks designed for RevOps and enterprise GTM operators.",
};

export default function ResourcesPage() {
  const items = listAllContent();

  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Resources</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Practical operator content — not theory.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Use these resources to align teams on signal definitions, governance, and measurable workflows.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="text-sm font-medium text-primary underline underline-offset-4" href="/blog">
                Blog
              </Link>
              <Link className="text-sm font-medium text-primary underline underline-offset-4" href="/guides">
                Guides
              </Link>
              <Link className="text-sm font-medium text-primary underline underline-offset-4" href="/benchmarks">
                Benchmarks
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <ResourceCard key={`${item.type}:${item.slug}`} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
