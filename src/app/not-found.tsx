import { Dog } from "@/components/icon/dog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="container flex h-[calc(100vh-100px)] w-full animate-fade-in flex-col items-center justify-center">
      <div className="mb-5 flex items-center gap-2 font-heading text-9xl font-bold">
        <span className="">4</span>
        <Dog />
        <span className="">4</span>
      </div>
      <h1 className="mb-8 text-center font-body text-3xl font-bold leading-[130%] sm:text-4xl">
        Página não encontrada.
      </h1>
      <Link
        className="cursor-pointer rounded bg-primary px-6 py-3 text-lg font-semibold text-primary-dark transition-all hover:bg-primary-medium"
        href="/"
      >
        Volte ao início
      </Link>
    </section>
  );
}
