"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./input";
import { Button } from "../button";
import { InputImage } from "./input-image";
import { photoPostAction } from "@/actions/photo-post";
import { Toast, ToastState } from "../toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
];

const createNewPostSchema = z.object({
  img: z
    .any()
    .refine((files) => files?.length == 1, "Esse campo é obrigatório.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `O tamanho máximo aceito é de 5MB.`,
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "O arquivo precisa ser do tipo imagem (.jpg, .jpeg, .png ou .webp).",
    ),
  nome: z
    .string()
    .trim()
    .min(3, { message: "O nome precisa de no mínimo 3 caracteres" }),
  peso: z.string().min(1, { message: "O valor mínimo para o peso é de 1kg" }),
  idade: z.string().min(1, { message: "Esse campo é obrigatório" }),
});

type CreateNewPostFormType = z.infer<typeof createNewPostSchema>;

export function FormNewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateNewPostFormType>({
    resolver: zodResolver(createNewPostSchema, {}, { raw: true }),
  });
  const [imgPreview, setImagePreview] = React.useState<string | null>(null);
  const [toastStatus, setToastStatus] = React.useState<null | ToastState>(null);

  const onSubmit: SubmitHandler<CreateNewPostFormType> = async (data) => {
    setToastStatus(null);
    const formData = new FormData();

    for (const field of Object.keys(data) as Array<keyof typeof data>) {
      if (field === "img") {
        formData.append("img", data.img[0]);
      } else {
        formData.append(`${field}`, `${data[field]}`);
      }
    }

    const response = await photoPostAction(formData);
    if (response && !response.ok) {
      setToastStatus({ status: "error", message: response.error });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex animate-fade-in flex-col gap-8 sm:mt-16 sm:grid sm:grid-cols-2"
      >
        <div className="flex flex-col gap-6">
          <Input
            label="Nome"
            placeholder="Digite o nome do pet"
            {...register("nome")}
            error={errors.nome?.message}
            required
          />
          <Input
            label="Peso (Kg)"
            placeholder="Digite o peso do pet"
            {...register("peso")}
            type="number"
            error={errors.peso?.message}
            required
          />
          <Input
            label="Idade"
            placeholder="Digite a idade do pet"
            {...register("idade")}
            type="number"
            error={errors.idade?.message}
            required
          />
        </div>

        <InputImage
          label="Imagem"
          placeholder="Escolher arquivo"
          {...register("img")}
          type="file"
          accept="image/*"
          error={errors.img?.message?.toString()}
          onChange={({ target }) =>
            setImagePreview(
              target.files ? URL.createObjectURL(target.files[0]) : null,
            )
          }
          imgPreview={imgPreview}
          required
        />
        <Button
          type="submit"
          className="col-span-2"
          isSubmitting={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
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
