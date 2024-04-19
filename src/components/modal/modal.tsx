"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ModalProps extends React.ComponentProps<"section"> {}

export function Modal({ children, ...props }: ModalProps) {
  const router = useRouter();

  function handleCloseModal(e: React.MouseEvent<HTMLElement>) {
    if (e.target === e.currentTarget) {
      router.back();
    }
  }

  return (
    <section
      onClick={handleCloseModal}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen animate-fade-in items-center justify-center bg-[#00000086] px-8 py-16"
      {...props}
    >
      {children}
    </section>
  );
}
