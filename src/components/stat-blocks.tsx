import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const stats = [
  {
    value: "↑ 18%",
    label: "Example metric: meeting conversion from routed signals",
    note: "Placeholder — replace with validated customer outcome.",
  },
  {
    value: "− 27%",
    label: "Example metric: false-positive rate after governance rules",
    note: "Placeholder — replace with validated measurement.",
  },
  {
    value: "2.3×",
    label: "Example metric: RevOps SLA compliance improvement",
    note: "Placeholder — replace with validated measurement.",
  },
];

export function StatBlocks() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Proof"
          title="Measure what changed — not just what happened"
          description="Kinetik is designed to make signal-driven workflows measurable and defensible. These examples show the kinds of outcomes teams track."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="p-6">
                <div className="text-3xl font-semibold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                <div className="mt-3 text-xs text-muted-foreground">{s.note}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
