"use server";

import { User } from "@/@types/globald";
import { USER_GET } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { cookies } from "next/headers";

export async function userGet() {
  const token = cookies().get("token")?.value;
  if (!token) return { error: "Token inexistente", ok: false, data: null };

  try {
    const { url, headers, method } = USER_GET(token);
    const response = await fetch(url, {
      method,
      headers,
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Token inválido. Faça login novamente!");
    }

    const data = (await response.json()) as {
      id: number;
      username: string;
      nome: string;
      email: string;
    };

    return { data, ok: true, error: null };
  } catch (error) {
    return { error: handleApiError(error), ok: false, data: null };
  }
}
