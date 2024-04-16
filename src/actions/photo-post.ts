"use server";

import { PHOTO_POST } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function photoPostAction(formData: FormData) {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Faça login novamente.");
    }

    const { url, headers, method } = PHOTO_POST(token);
    const response = await fetch(url, {
      method,
      headers,
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Não foi possível criar um novo post.");
    }
  } catch (error) {
    return handleApiError(error);
  }
  revalidateTag("feed");
  revalidateTag("photo");
  revalidateTag("stats");
  redirect("/profile");
}
