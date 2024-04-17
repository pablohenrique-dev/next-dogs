"use client";

import { Button } from "@/components/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="container flex h-screen w-screen flex-col items-center justify-center gap-6"></div>
        <h1 className="text-5xl font-semibold">
          Ops! Um erro inesperado ocorreu.
        </h1>
        <Button onClick={() => reset()}>Tentar novamente</Button>
      </body>
    </html>
  );
}
