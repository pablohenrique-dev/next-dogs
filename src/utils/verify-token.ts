import { USER_GET } from "@/services/api";

export async function verifyToken(token?: string) {
  if (!token) return false;
  try {
    const { headers, method, url } = USER_GET(token);
    const response = await fetch(url, {
      headers,
      method,
    });

    if (!response.ok) {
      throw new Error("Token inválido");
    }

    return true;
  } catch (error) {
    return false;
  }
}
