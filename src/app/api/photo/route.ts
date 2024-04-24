import { PHOTO_GET } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { NextResponse, type NextRequest } from "next/server";

const REVALIDATE_TIME_IN_SECONDS = 10;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const total = searchParams.get("total");
    const page = searchParams.get("page");
    const user = searchParams.get("user");

    const { url, method } = PHOTO_GET();
    const response = await fetch(
      url + `/?_total=${total}&_page=${page}&_user=${user}`,
      {
        method,
        next: {
          tags: ["feed"],
          revalidate: REVALIDATE_TIME_IN_SECONDS,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Ocorreu um erro ao buscar as imagens.");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    const err = handleApiError(error);
    return NextResponse.json(
      { error: err },
      {
        status: 400,
      },
    );
  }
}
