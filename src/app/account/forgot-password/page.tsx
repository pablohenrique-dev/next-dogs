import { Button } from "@/components/button";
import { Input } from "@/components/form/input";
import { HeadingDetail } from "@/components/heading-detail";
import Link from "next/link";

export default function ForgetPasswordPage() {
  return (
    <>
      <div className="flex min-h-screen min-w-fit max-w-[342px] animate-fade-left flex-col justify-center px-6 sm:px-16 md:px-28 md:py-16">
        <Link href="/" className="font-body text-base font-medium text-neutral">
          ← Voltar para a página inicial
        </Link>

        <div className="mt-16">
          <h2 className="relative mb-9 font-heading text-4xl">
            Esqueceu sua senha?
            <HeadingDetail />
          </h2>

          <form className="flex flex-col gap-6">
            <Input
              label="E-mail ou nome de usuário"
              name="username-or-email"
              placeholder="Digite o seu e-mail ou nome de usuário"
              required
            />

            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </div>
    </>
  );
}
