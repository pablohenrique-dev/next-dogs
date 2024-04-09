import { Photo } from "@/@types/global";
import { Comments } from "@/components/comments";
import { HeadingDetail } from "@/components/heading-detail";
import { Eye } from "@/components/icon/eye";
import { PHOTO_GET } from "@/services/api";
import { handleApiError } from "@/utils/handle-errors";
import Image from "next/image";

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

interface PhotoContent {
  photo: Photo;
  comments: Comment[];
}

async function getPhoto(id: string): Promise<string | PhotoContent> {
  const REVALIDATE_CACHE_TIME = 60;
  try {
    const { url, method } = PHOTO_GET();
    const response = await fetch(url + `/${id}`, {
      method,
      next: {
        tags: ["photo"],
        revalidate: REVALIDATE_CACHE_TIME,
      },
    });
    if (!response.ok) {
      throw new Error("Ocorreu um erro ao buscar a image.");
    }
    return response.json();
  } catch (error) {
    return handleApiError(error);
  }
}

export default async function PhotoPage({ params }: PhotoPageParams) {
  const photoContent = await getPhoto(params.id);

  if (typeof photoContent !== "string")
    return (
      <section className="container my-6 animate-fade-in">
        <Image
          src={photoContent.photo.src}
          alt={photoContent.photo.title}
          width={1216}
          height={1216}
          sizes="100vw"
          priority
          className="w-full rounded"
        />
        <div>
          <div className="my-4 flex items-center justify-between text-lg opacity-65">
            <span>@{photoContent.photo.title}</span>
            <span className="flex items-center gap-2">
              <Eye color="black" size="small" />
              {photoContent.photo.acessos}
            </span>
          </div>
          <div className="flex items-center justify-between sm:flex-col sm:items-start">
            <h2 className="relative font-heading text-4xl sm:mb-6 sm:text-5xl">
              {photoContent.photo.author}
              <HeadingDetail />
            </h2>
            <div className="flex items-center gap-6 text-base font-semibold opacity-65 sm:text-lg">
              <span className="border-l-2 border-l-black pl-2">
                {photoContent.photo.peso} Kg
              </span>
              <span className="border-l-2 border-l-black pl-2">
                {photoContent.photo.idade} anos
              </span>
            </div>
          </div>

          <Comments
            comments={photoContent.comments}
            photoId={photoContent.photo.id}
          />
        </div>
      </section>
    );
}
