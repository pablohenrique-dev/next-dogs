import { PhotoContentType } from "@/@types/global";
import { PHOTO_GET } from "@/services/api";
import { handleApiError } from "./handle-errors";

const REVALIDATE_TIME_IN_SECONDS = 60;

export async function photoGet(id: string) {
  try {
    const { url, method } = PHOTO_GET();
    const response = await fetch(url + `/${id}`, {
      method,
      next: {
        tags: ["photo"],
        revalidate: REVALIDATE_TIME_IN_SECONDS,
      },
    });
    if (!response.ok) {
      throw new Error("Ocorreu um erro ao buscar a image.");
    }

    const data = (await response.json()) as PhotoContentType;
    return { ok: true, data, error: null };
  } catch (error) {
    return handleApiError(error);
  }
}