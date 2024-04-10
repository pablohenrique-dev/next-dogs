"use server";

import { PASSWORD_RESET_POST } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";

export async function passwordResestAction(credentials: {
  login: string;
  password: string;
  key: string;
}) {
  try {
    const { url, method, body, headers } = PASSWORD_RESET_POST(credentials);
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Não autorizado.");
    }

    const data = (await response.json()) as string;

    return { ok: true, data, error: null };
  } catch (error) {
    return handleApiError(error);
  }
}
