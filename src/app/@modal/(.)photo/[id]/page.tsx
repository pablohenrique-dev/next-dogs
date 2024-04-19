import { Modal } from "@/components/modal/modal";
import { PhotoContent } from "@/components/photo/photo-content";
import { photoGet } from "@/utils/photo-get";
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

export async function generateMetadata({ params }: PhotoPageParams) {
  const { data } = await photoGet(params.id);

  if (!data) return { title: "Fotos" };
  return {
    title: data.photo.title,
  };
}
