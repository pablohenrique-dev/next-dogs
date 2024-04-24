import { Modal } from "@/components/modal/modal";
import { PhotoContent } from "@/components/photo/photo-content";
import { photoGet } from "@/utils/photo-get";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PhotoPageParams {
  params: { id: string };
}

export default async function PhotoPage({ params }: PhotoPageParams) {
  const { data } = await photoGet(params.id);

  if (!data) return notFound();
  return (
    <Modal>
      <PhotoContent photoContent={data} isModal={true} />
    </Modal>
  );
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
