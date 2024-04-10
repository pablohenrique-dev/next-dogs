"use server";

import { PostUserFormType } from "@/components/form/form-login";
import { TOKEN_POST } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

interface UserLoginResponse {
  user_email: string;
  user_nicename: string;
  user_display_name: string;
  token: string;
}

export async function userLoginAction(credentials: PostUserFormType) {
  try {
    const { url, headers, method } = TOKEN_POST();
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Usuário e/ou senha incorretos");
    }

    const data = (await response.json()) as UserLoginResponse;

    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });

    revalidateTag("feed");

    return { ok: true, data: null, error: null };
  } catch (error) {
    return handleApiError(error);
  }
}
