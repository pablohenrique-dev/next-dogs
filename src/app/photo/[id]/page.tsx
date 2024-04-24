import { Photo } from "@/@types/global";
import { PhotoContent } from "@/components/photo/photo-content";
import { PHOTOS_GET } from "@/services/api";
import { photoGet } from "@/utils/photo-get";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PhotoPageParams {
  params: { id: string };
}

export default async function PhotoPage({ params }: PhotoPageParams) {
  const { data } = await photoGet(params.id);

  if (!data) return notFound();
  return <PhotoContent photoContent={data} isModal={false} />;
}

export async function generateStaticParams() {
  const { url, method } = PHOTOS_GET({ total: 9, page: 0, user: 0 });
  const response = await fetch(url, { method });
  const photos = (await response.json()) as Photo[];

  return photos.map((photo) => {
    return {
      id: photo.id.toString(),
    };
  });
}

export async function generateMetadata({
  params,
}: PhotoPageParams): Promise<Metadata> {
  const { data } = await photoGet(params.id);

  if (!data) return { title: "Fotos" };
  return {
    title: data.photo.title,
    description: `Pet ${data.photo.title} postada pelo usuário ${data.photo.author}`,
    openGraph: {
      images: [
        {
          url: data.photo.src,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
