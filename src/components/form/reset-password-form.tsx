"use client";

import { z } from "zod";
import { FormContainer } from "./form-container";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputPassword } from "./input-password";
import { Button } from "../button";
import React from "react";
import { Toast, ToastState } from "../toast";
import { passwordResestAction } from "@/actions/password-rest";
import { useRouter } from "next/navigation";

const postPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "A senha precisa de no mínimo 6 caracteres" }),
});

type PostPasswordFormType = z.infer<typeof postPasswordSchema>;

interface ResetPasswordFormProps {
  url_key: string;
  login: string;
}

export function ResetPasswordForm({ url_key, login }: ResetPasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<PostPasswordFormType>({
    resolver: zodResolver(postPasswordSchema),
  });

  const [toastStatus, setToastStatus] = React.useState<null | ToastState>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<PostPasswordFormType> = async ({
    password,
  }) => {
    setToastStatus(null);
    const response = await passwordResestAction({
      login,
      password,
      key: url_key,
    });
    if (response.ok && response.data) {
      setToastStatus({ message: response.data, status: "success" });
      router.push("/account/login");
    } else {
      setToastStatus({ message: response.error, status: "error" });
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputPassword
          label="Nova senha"
          placeholder="••••••"
          {...register("password")}
          required
          error={errors.password?.message}
        />
        <Button isSubmitting={isSubmitting}>
          {isSubmitting ? "Redefinindo senha" : "Redefinir senha"}
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
