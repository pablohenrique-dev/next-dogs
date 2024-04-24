import { FormLogin } from "@/components/form/form-login";
import { HeadingDetail } from "@/components/heading-detail";
import { Metadata } from "next";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="flex min-h-screen min-w-fit animate-fade-left flex-col justify-center px-6 sm:px-16 md:px-28 md:py-16">
        <Link href="/" className="font-body text-base font-medium text-neutral">
          ← Voltar para a página inicial
        </Link>

        <div className="mt-16">
          <h2 className="relative mb-6 font-heading text-4xl">
            Entrar
            <HeadingDetail />
          </h2>
          <FormLogin />
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Login",
  description: "Logue na sua conta no site Dogs.",
};
