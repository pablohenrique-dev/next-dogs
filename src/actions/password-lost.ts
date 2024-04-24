"use server";

import { PASSWORD_LOST_POST } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";

export async function passwordLostAction(formData: {
  login: string;
  url: string;
}) {
  try {
    const { method, url, headers } = PASSWORD_LOST_POST();

    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("O usuário informado não existe.");
    }

    const data = await response.json();

    return { ok: true, data, error: null };
  } catch (error) {
    return handleApiError(error);
  }
}
