"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function userLogoutAction() {
  cookies().delete("token");
  redirect("/account/login");
}
