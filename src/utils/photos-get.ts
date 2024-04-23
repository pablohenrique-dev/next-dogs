import { Photo } from "@/@types/global";

export async function photosGet({
  pageParam,
  postPerPage,
  user,
}: {
  pageParam: number;
  postPerPage: number;
  user: string | 0;
}) {
  try {
    const response = await fetch(
      `/api/photo?total=${postPerPage}&page=${pageParam}&user=${user}`,
    );
    if (!response.ok) {
      throw new Error("Ocorreu um erro ao buscar as imagens");
    }
    const data = (await response.json()) as Photo[];

    return data;
  } catch (error) {
    throw error;
  }
}
