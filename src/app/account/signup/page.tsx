import { Button } from "@/components/button";
import { Input } from "@/components/form/input";
import { InputPassword } from "@/components/form/input-password";
import { HeadingDetail } from "@/components/heading-detail";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <div className="flex min-h-screen min-w-fit  animate-fade-left flex-col justify-center px-6 sm:px-16 md:px-28 md:py-16">
        <Link
          href="/account/login"
          className="font-body text-base font-medium text-neutral"
        >
          ← Voltar para a página de login
        </Link>

        <div className="mt-16">
          <h2 className="relative mb-9 font-heading text-4xl">
            Criar conta
            <HeadingDetail />
          </h2>

          <form className="flex flex-col gap-6">
            <Input
              label="Usuário"
              name="username"
              placeholder="Digite o seu nome de usuário"
              required
            />
            <Input
              label="E-mail"
              name="email"
              type="email"
              placeholder="dogs@email.example"
              required
            />

            <InputPassword
              label="Senha"
              name="password"
              placeholder="•••••••"
              required
            />

            <Button type="submit">criar conta</Button>
          </form>
        </div>
      </div>
    </>
  );
}
