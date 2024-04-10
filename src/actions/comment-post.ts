"use server";

import { COMMENT_POST } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function commentPostAction(photoId: number, comment: string) {
  try {
    const token = cookies().get("token")?.value;

    if (!token) {
      throw new Error("Faça login novamente.");
    }

    const { url, method, headers, body } = COMMENT_POST(
      photoId,
      token,
      comment,
    );
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Não foi possível enviar o comentário");
    }

    revalidateTag("photo");
    revalidateTag("feed");
    return { ok: true, data: null, error: null };
  } catch (error) {
    return handleApiError(error);
  }
}
