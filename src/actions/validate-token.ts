"use server";

import { TOKEN_VALIDATE_POST } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { cookies } from "next/headers";

export async function validateTokenAction() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) throw new Error("Token inexistente");

    const { url, headers, method } = TOKEN_VALIDATE_POST(token);
    const response = await fetch(url, {
      method,
      headers,
    });

    if (!response.ok) {
      throw new Error("Token inválido. Faça login novamente!");
    }

    return { ok: true, data: null, error: null };
  } catch (error) {
    return handleApiError(error);
  }
}
