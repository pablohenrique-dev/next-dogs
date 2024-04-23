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
        <div className="container flex h-screen w-screen flex-col items-center justify-center gap-6">
          <h1 className="text-center text-3xl font-semibold leading-[130%] md:text-5xl">
            Ops! Um erro inesperado ocorreu.
          </h1>
          <Button className="px-4" onClick={() => reset()}>
            Tentar novamente
          </Button>
        </div>
      </body>
    </html>
  );
}
