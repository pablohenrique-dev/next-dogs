"use client";

import React from "react";
import { FormContainer } from "./form-container";
import { Input } from "./input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../button";
import { Toast, ToastState } from "../toast";
import { passwordLostAction } from "@/actions/password-lost";

const postLoginSchema = z.object({
  login: z.string().trim().min(1, { message: "Esse campo é obrigatório" }),
});

type PostLoginFormType = z.infer<typeof postLoginSchema>;

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<PostLoginFormType>({
    resolver: zodResolver(postLoginSchema),
  });

  const [toastStatus, setToastStatus] = React.useState<null | ToastState>(null);

  const onSubmit: SubmitHandler<PostLoginFormType> = async (data) => {
    setToastStatus(null);
    const response = await passwordLostAction(data.login);
    if (response.ok && response.data) {
      setToastStatus({ message: response.data, status: "success" });
    } else if (response.error) {
      setToastStatus({ message: response.error, status: "error" });
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("login")}
          label="E-mail ou Nome de usuário"
          placeholder="dog@example.com"
          error={errors.login?.message}
          required
        />
        <Button isSubmitting={isSubmitting} type="submit">
          {isSubmitting ? "Enviando" : "Enviar"}
        </Button>
      </FormContainer>
      {toastStatus && (
        <Toast
          closeToast={() => setToastStatus(null)}
          status={toastStatus.status}
          message={toastStatus.message}
        />
      )}
    </>
  );
}
