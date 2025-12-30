import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

/**
 * Minimal dropdown primitive based on <details>.
 * Suitable for simple navigation menus without extra dependencies.
 */
export function DropdownMenu({
  label,
  children,
  className,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <details className={cn("relative", className)}>
      <summary className="flex list-none cursor-pointer items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-foreground hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <span>{label}</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </summary>
      <div className="absolute left-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-lg border border-border bg-card shadow-soft">
        <div className="p-2">{children}</div>
      </div>
    </details>
  );
}

export function DropdownMenuItem({
  children,
  href,
  description,
}: {
  children: React.ReactNode;
  href: string;
  description?: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-md px-3 py-2 text-sm hover:bg-muted/60"
    >
      <div className="font-medium">{children}</div>
      {description ? (
        <div className="mt-0.5 text-xs text-muted-foreground">
          {description}
        </div>
      ) : null}
    </a>
  );
}
