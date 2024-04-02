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
import { userContext } from "@/context/user-context";
import { useRouter } from "next/navigation";
import { Toast } from "../toast";

const createUserSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O nome de usuário precisa de no mínimo 3 caracteres" }),
  password: z
    .string()
    .min(6, { message: "A senha precisa de no mínimo 6 caracteres" }),
  email: z.string().email({ message: "Esse e-mail não é válido" }),
});

type CreateUserFormType = z.infer<typeof createUserSchema>;

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormType>({
    resolver: zodResolver(createUserSchema),
  });
  const { setUser } = React.useContext(userContext);
  const router = useRouter();
  const [signUpError, setSignUpError] = React.useState<null | string>(null);

  const onSubmit: SubmitHandler<CreateUserFormType> = async (data) => {
    const response = await userSignUpAction(data);
    if (response.ok && typeof response.data !== "string") {
      const { token, ...user } = response.data;

      setUser(user);
      router.push("/profile");
    }

    response.error ? setSignUpError(response.error) : setSignUpError(null);
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
      {signUpError && (
        <Toast closeToast={() => setSignUpError(null)}>{signUpError}</Toast>
      )}
    </>
  );
}
