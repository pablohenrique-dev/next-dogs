import { FormSignUp } from "@/components/form/form-signup";
import { HeadingDetail } from "@/components/heading-detail";
import { Metadata } from "next";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <div className="flex min-h-screen min-w-fit animate-fade-left flex-col justify-center px-6 sm:px-16 md:px-28 md:py-16">
        <Link
          href="/account/login"
          className="font-body text-base font-medium text-neutral"
        >
          ← Voltar para a página de login
        </Link>

        <div className="mt-10">
          <h2 className="relative mb-9 font-heading text-4xl">
            Criar conta
            <HeadingDetail />
          </h2>

          <FormSignUp />
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Criar conta",
  description: "Crie sua conta no site Dogs.",
};
