import { cn } from "@/lib/utils";

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("prose prose-neutral dark:prose-invert max-w-none")}>
      {children}
    </div>
  );
}
