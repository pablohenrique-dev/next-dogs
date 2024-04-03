"use server";

import { PASSWORD_LOST_POST } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";

export async function passwordLostAction(login: string) {
  try {
    const { body, method, url, headers } = PASSWORD_LOST_POST(login);

    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("O usuário informado não existe.");
    }

    const data = await response.json();

    return { ok: true, data, error: "" };
  } catch (error) {
    return { ok: false, data: "", error: handleApiError(error) };
  }
}
