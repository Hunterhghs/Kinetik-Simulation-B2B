import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { Mail, MapPin, MessageSquareText } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kinetik. Book a demo or reach the team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <Badge>Company · Contact</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Talk to the team.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              The fastest path is a short demo request so we can align on your workflows,
              your signal sources, and your governance requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <CardTitle className="text-base">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Use your preferred channel — we’ll route it to the right owner.</p>
                <p className="mt-3">
                  <a className="text-primary underline underline-offset-4" href="mailto:hello@kinetikb2b.ai">
                    hello@kinetikb2b.ai
                  </a>
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  Placeholder address — update to your real inbox.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageSquareText className="h-4 w-4" />
                  <CardTitle className="text-base">Demo</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Share your stack and the workflow you want to validate first.</p>
                <p className="mt-3">
                  <Link className="text-primary underline underline-offset-4" href="/demo">
                    Book a demo →
                  </Link>
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <CardTitle className="text-base">Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Remote-first.</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  Add your HQ or regions once finalized.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
