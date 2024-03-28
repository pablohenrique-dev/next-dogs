import { Button } from "@/components/button";
import { Input } from "@/components/form/input";
import { InputPassword } from "@/components/form/input-password";
import { HeadingDetail } from "@/components/heading-detail";

import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="flex min-h-screen min-w-fit animate-fade-left flex-col justify-center px-6 sm:px-16 md:px-28 md:py-16">
        <Link href="/" className="font-body text-base font-medium text-neutral">
          ← Voltar para a página inicial
        </Link>

        <div className="mt-16">
          <h2 className="relative mb-9 font-heading text-4xl">
            Entrar
            <HeadingDetail />
          </h2>

          <form className="flex flex-col gap-6">
            <Input
              label="Usuário"
              name="username"
              placeholder="Digite o seu nome de usuário"
              required
            />

            <InputPassword
              label="Senha"
              name="password"
              placeholder="•••••••"
              required
            />

            <Button type="submit">Entrar</Button>

            <div className="flex flex-col items-center gap-3 font-medium">
              <p className="text-center text-neutral-light">
                Não possui uma conta ainda?{" "}
                <Link
                  className="text-primary transition hover:text-primary-medium"
                  href="/account/signup"
                >
                  Criar conta
                </Link>{" "}
              </p>
              <Link
                className="text-primary transition hover:text-primary-medium"
                href="/account/forgot-password"
              >
                Esqueci minha senha
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
