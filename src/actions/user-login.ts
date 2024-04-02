"use server";

import { User } from "@/@types/globald";
import { PostUserFormType } from "@/components/form/login-form";
import { TOKEN_POST } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

interface UserLoginResponse extends User {
  token: string;
}

export async function userLoginAction(userCredentials: PostUserFormType) {
  try {
    const { url, headers, method } = TOKEN_POST();
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(userCredentials),
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

    return { data, error: "", ok: true };
  } catch (error) {
    return { data: "", error: handleApiError(error), ok: false };
  }
}
