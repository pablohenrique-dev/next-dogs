"use server";

import { USER_POST } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { userLoginAction } from "./user-login";
import { CreateUserFormType } from "@/components/form/form-signup";

export async function userSignUpAction(credentials: CreateUserFormType) {
  try {
    const { body, headers, method, url } = USER_POST(credentials);
    const response = await fetch(url, {
      method,
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error("E-mail já está em uso");
    }

    const { ok, data } = await userLoginAction({
      username: credentials.username,
      password: credentials.password,
    });

    if (!ok) {
      throw new Error("Não foi possível logar");
    }

    return {
      ok: true,
      data,
      error: null,
    };
  } catch (error) {
    return handleApiError(error);
  }
}
