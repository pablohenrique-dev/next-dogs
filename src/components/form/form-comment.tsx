"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./input";
import { commentPostAction } from "@/actions/comment-post";
import { Toast, ToastState } from "../toast";
import { Send } from "../icon/send";

const postCommentSchema = z.object({
  comment: z.string().trim().min(1),
});

type PostCommentFormType = z.infer<typeof postCommentSchema>;

interface FormCommentProps {
  photoId: number;
}

export function FormComment({ photoId }: FormCommentProps) {
  const [toastStatus, setToastStatus] = React.useState<null | ToastState>(null);
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PostCommentFormType>({
    resolver: zodResolver(postCommentSchema),
  });
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);

  const onSubmit: SubmitHandler<PostCommentFormType> = async ({ comment }) => {
    setToastStatus(null);
    const response = await commentPostAction(photoId, comment);

    if (response.ok) {
      reset();
    } else if (response.error) {
      setToastStatus({ message: response.error, status: "error" });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex animate-fade-in items-stretch gap-2 lg:gap-4"
      >
        <Input
          placeholder="Comente..."
          label=""
          {...register("comment")}
          className="w-full"
        />
        <button
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          type="submit"
          className="flex aspect-square w-fit items-center justify-center pt-1 opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          <Send
            color={isButtonHovered ? "primaryDefault" : "black"}
            size="big"
          />
        </button>
      </form>
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
