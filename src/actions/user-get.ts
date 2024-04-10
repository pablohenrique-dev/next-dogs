"use server";

import { User } from "@/@types/global";
import { USER_GET } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { cookies } from "next/headers";

export async function userGet() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Token inexistente. Faça login!");
    }

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

    const data = (await response.json()) as User;

    return { data, ok: true, error: null };
  } catch (error) {
    return handleApiError(error);
  }
}
