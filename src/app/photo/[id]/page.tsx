import { Photo } from "@/@types/global";
import { PhotoContent } from "@/components/photo/photo-content";
import { PHOTO_GET } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import { notFound } from "next/navigation";

interface PhotoPageParams {
  params: { id: string };
}

export interface Comment {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_author_email: string;
  comment_author_url: string;
  comment_author_IP: string;
  comment_date: string;
  comment_date_gmt: string;
  comment_content: string;
  comment_karma: string;
  comment_approved: string;
  comment_agent: string;
  comment_type: string;
  comment_parent: string;
  user_id: string;
}

export interface PhotoContent {
  photo: Photo;
  comments: Comment[];
}

const REVALIDATE_TIME_IN_SECONDS = 60;

async function getPhoto(id: string) {
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

    const data = (await response.json()) as PhotoContent;
    return { ok: true, data, error: null };
  } catch (error) {
    return handleApiError(error);
  }
}

export default async function PhotoPage({ params }: PhotoPageParams) {
  const { data } = await getPhoto(params.id);

  if (!data) return notFound();
  return <PhotoContent photoContent={data} />;
}

export async function generateMetadata({ params }: PhotoPageParams) {
  const { data } = await getPhoto(params.id);

  if (!data) return { title: "Fotos" };
  return {
    title: data.photo.title,
  };
}
