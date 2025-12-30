import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { ResourceCard } from "@/components/resource-card";
import { TagPills } from "@/components/tag-pills";
import { listContent } from "@/lib/content";

export default function BenchmarksIndexPage() {
  const all = listContent("benchmarks");
  const tags = Array.from(new Set(all.flatMap((p) => p.tags))).sort();

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-2xl space-y-4">
          <Badge>Resources · Benchmarks</Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Benchmarks and measurement frameworks.
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            Use these templates to define what "good" looks like — and to prove whether signal-driven workflows improved it.
          </p>
        </div>

        <div className="mt-8">
          <TagPills basePath="/benchmarks" tags={tags} activeTag={undefined} />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {all.map((item) => (
            <ResourceCard key={item.slug} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
