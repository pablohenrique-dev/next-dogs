"use client";

import React from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input";
import { InputPassword } from "./input-password";
import { Button } from "../button";
import Link from "next/link";
import { userLoginAction } from "@/actions/user-login";
import { FormContainer } from "./form-container";
import { userContext } from "@/context/user-context";
import { useRouter } from "next/navigation";
import { Toast } from "../toast";

const postUserSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O nome de usuário precisa de no mínimo 3 caracteres" }),
  password: z
    .string()
    .min(3, { message: "A senha precisa de no mínimo 3 caracteres" }),
});

export type PostUserFormType = z.infer<typeof postUserSchema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PostUserFormType>({
    resolver: zodResolver(postUserSchema),
  });
  const { setUser } = React.useContext(userContext);
  const router = useRouter();
  const [loginError, setLoginError] = React.useState<null | string>(null);

  const onSubmit: SubmitHandler<PostUserFormType> = async (data) => {
    const response = await userLoginAction(data);
    if (response.ok && typeof response.data !== "string") {
      const { token, ...user } = response.data;
      setUser(user);
      router.push("/profile");
    }

    response.error ? setLoginError(response.error) : setLoginError(null);
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Usuário"
          placeholder="Digite o seu nome de usuário"
          {...register("username")}
          error={errors.username?.message}
          required
        />
        <InputPassword
          label="Senha"
          placeholder="••••••"
          {...register("password")}
          error={errors.password?.message}
          required
        />
        <Button isSubmitting={isSubmitting} type="submit">
          {isSubmitting ? "Entrando" : "Entrar"}
        </Button>

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
      </FormContainer>
      {loginError && (
        <Toast closeToast={() => setLoginError(null)}>{loginError}</Toast>
      )}
    </>
  );
}
