import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export function LogoCloud({
  title = "Trusted by teams building predictable pipeline",
  logos = [
    "EnterpriseCo",
    "Northwind",
    "GlobalSystems",
    "ApexWorks",
    "BluePeak",
    "VectorLabs",
  ],
  className,
}: {
  title?: string;
  logos?: string[];
  className?: string;
}) {
  return (
    <section className={cn("py-10", className)}>
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">
            (Placeholder logos — replace with approved customer marks)
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((name) => (
            <div
              key={name}
              className="flex h-12 items-center justify-center rounded-lg border border-border bg-card text-xs font-medium text-muted-foreground shadow-soft"
              aria-label={`Logo placeholder: ${name}`}
              title={`Logo placeholder: ${name}`}
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
