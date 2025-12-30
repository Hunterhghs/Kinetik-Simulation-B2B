import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Status",
  description: "Service status placeholder page.",
};

export default function StatusPage() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-2xl space-y-4">
          <Badge>Status</Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Status
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            This is a placeholder. Many teams host status pages on dedicated providers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="text-sm font-medium">Web app</div>
              <div className="mt-2 text-sm text-muted-foreground">Operational (placeholder)</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-sm font-medium">API</div>
              <div className="mt-2 text-sm text-muted-foreground">Operational (placeholder)</div>
            </CardContent>
          </Card>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          If you need a dedicated status site, link to it from here and from the footer.
          <br />
          <Link className="text-primary underline underline-offset-4" href="/trust/security">
            See security overview →
          </Link>
        </p>
      </Container>
    </section>
  );
}
