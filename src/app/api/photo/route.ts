import { PHOTO_GET, PHOTO_GETT } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { NextResponse, type NextRequest } from "next/server";

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
          tags: ["photo", "comments"],
          revalidate: 60,
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