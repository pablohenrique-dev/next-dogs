import { ForgotPasswordForm } from "@/components/form/forgot-password-form";
import { HeadingDetail } from "@/components/heading-detail";
import { Metadata } from "next";
import Link from "next/link";

export default function ForgetPasswordPage() {
  return (
    <div className="flex min-h-screen min-w-fit max-w-[342px] animate-fade-left flex-col justify-center px-6 sm:px-16 md:px-28 md:py-16">
      <Link href="/" className="font-body text-base font-medium text-neutral">
        ← Voltar para a página inicial
      </Link>

      <div className="mt-16">
        <h2 className="relative mb-6 font-heading text-4xl">
          Esqueceu sua senha?
          <HeadingDetail />
        </h2>

        <p className="mb-8 w-fit text-base text-neutral md:w-[400px]">
          Ao preencher o campo abaixo e clicar no botão enviar, será enviado
          para o seu e-mail as instruções para redefinir sua senha.
        </p>

        <ForgotPasswordForm />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Recuperar senha",
  description: "Recupere a sua senha.",
};
