"use server";

import { PHOTO_DELETE } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function photoDeleteAction(photoId: string) {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Faça login novamente.");
    }
    const { url, method, headers } = PHOTO_DELETE(token, photoId);
    const response = await fetch(url, { method, headers });

    if (!response.ok) {
      throw new Error("Não foi possível deletar a foto.");
    }
  } catch (error) {
    return handleApiError(error);
  }

  revalidateTag("feed");
  revalidateTag("photo");
  revalidateTag("stats");
  redirect("/profile");
}
