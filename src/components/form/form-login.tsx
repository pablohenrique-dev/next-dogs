"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input";
import { InputPassword } from "./input-password";
import { Button } from "../button";
import { userLoginAction } from "@/actions/user-login";
import { FormContainer } from "./form-container";
import { Toast, ToastState } from "../toast";

const postUserSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: "O nome de usuário precisa de no mínimo 3 caracteres" }),
  password: z
    .string()
    .trim()
    .min(3, { message: "A senha precisa de no mínimo 3 caracteres" }),
});

export type PostUserFormType = z.infer<typeof postUserSchema>;

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PostUserFormType>({
    resolver: zodResolver(postUserSchema),
  });
  const [toastStatus, setToastStatus] = React.useState<null | ToastState>(null);

  const onSubmit: SubmitHandler<PostUserFormType> = async (data) => {
    setToastStatus(null);
    const response = await userLoginAction(data);
    if (response.ok) {
      window.location.href = "/profile";
    } else if (response.error) {
      setToastStatus({ status: "error", message: response.error });
    }
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
      {toastStatus && (
        <Toast
          closeToast={() => setToastStatus(null)}
          message={toastStatus.message}
          status={toastStatus.status}
        />
      )}
    </>
  );
}
