import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container py-24">
      <div className="max-w-2xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          Not found
        </p>
        <h1 className="font-heading text-4xl tracking-tight text-foreground">
          This page does not exist.
        </h1>
        <p className="text-base leading-7 text-muted-foreground">
          The route may have changed, or the content may not be published yet.
        </p>
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </section>
  );
}
