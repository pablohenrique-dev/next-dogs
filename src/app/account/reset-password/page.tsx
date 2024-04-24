import { FormResetPassword } from "@/components/form/form-reset-password";
import { HeadingDetail } from "@/components/heading-detail";
import { Metadata } from "next";
import Link from "next/link";

interface resetPasswordParams {
  searchParams: { key: string; login: string };
}

export default function resetPasswordPage({
  searchParams,
}: resetPasswordParams) {
  return (
    <div className="flex min-h-screen min-w-fit animate-fade-left flex-col justify-center px-6 sm:px-16 md:px-28 md:py-16">
      <Link
        href="/account/login"
        className="font-body text-base font-medium text-neutral"
      >
        ← Voltar para a página de login
      </Link>

      <div className="mt-10">
        <h2 className="relative mb-9 font-heading text-4xl">
          Alterar senha
          <HeadingDetail />
        </h2>

        <FormResetPassword
          url_key={searchParams.key}
          login={searchParams.login}
        />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Resetar senha",
  description: "Resete a sua senha.",
};
