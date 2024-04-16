"use client";

import { photoDeleteAction } from "@/actions/photo-delete";
import React from "react";

interface PhotoDeleteProps {
  photoId: string;
}

export function PhotoDelete({ photoId }: PhotoDeleteProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleClick() {
    setIsLoading(true);
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      await photoDeleteAction(photoId);
    }
    setIsLoading(false);
  }

  return (
    <button
      className="rounded border bg-neutral-300 px-4 py-1 font-semibold text-black disabled:cursor-not-allowed disabled:opacity-75"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? "Deletando..." : "Deletar"}
    </button>
  );
}
