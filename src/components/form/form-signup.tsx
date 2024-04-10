"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormContainer } from "./form-container";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./input";
import { InputPassword } from "./input-password";
import { Button } from "../button";
import { userSignUpAction } from "@/actions/user-signup";
import { Toast, ToastState } from "../toast";

const createUserSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: "O nome de usuário precisa de no mínimo 3 caracteres" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "A senha precisa de no mínimo 6 caracteres" }),
  email: z.string().trim().email({ message: "Esse e-mail não é válido" }),
});

export type CreateUserFormType = z.infer<typeof createUserSchema>;

export function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormType>({
    resolver: zodResolver(createUserSchema),
  });

  const [toastStatus, setToastStatus] = React.useState<null | ToastState>(null);

  const onSubmit: SubmitHandler<CreateUserFormType> = async (data) => {
    setToastStatus(null);
    const response = await userSignUpAction(data);
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
        <Input
          label="E-mail"
          placeholder="dog@example.com"
          {...register("email")}
          type="email"
          error={errors.email?.message}
          required
        />
        <InputPassword
          label="Senha"
          placeholder="••••••"
          {...register("password")}
          error={errors.password?.message}
          required
        />
        <Button isSubmitting={isSubmitting} type="submit" className="m-0">
          {isSubmitting ? "Criando conta" : "Criar conta"}
        </Button>
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
