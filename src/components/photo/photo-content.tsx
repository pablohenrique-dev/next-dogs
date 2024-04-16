"use client";

import { PhotoContent as PhotoInfos } from "@/app/photo/[id]/page";
import { HeadingDetail } from "../heading-detail";
import Image from "next/image";
import { Eye } from "../icon/eye";
import { Comments } from "../comments";
import { useUser } from "@/context/user-context";
import { PhotoDelete } from "./photo-delete";

interface PhotoContentProps {
  photoContent: PhotoInfos;
}

export function PhotoContent({
  photoContent: { photo, comments },
}: PhotoContentProps) {
  const { user } = useUser();

  return (
    <section className="container my-6 animate-fade-in">
      <Image
        src={photo.src}
        alt={photo.title}
        width={1216}
        height={1216}
        sizes="100vw"
        priority
        className="w-full rounded"
      />
      <div>
        <div className="my-6 flex items-center justify-between text-lg opacity-75">
          {user && user.username === photo.author ? (
            <PhotoDelete photoId={String(photo.id)} />
          ) : (
            <span>@{photo.author}</span>
          )}

          <span className="flex items-center gap-2">
            <Eye color="black" size="small" />
            {photo.acessos}
          </span>
        </div>
        <div className="flex items-center justify-between sm:flex-col sm:items-start">
          <h2 className="relative font-heading text-4xl sm:mb-6 sm:text-5xl">
            {photo.title}
            <HeadingDetail />
          </h2>
          <div className="flex items-center gap-6 text-base font-semibold opacity-65 sm:text-lg">
            <span className="border-l-2 border-l-black pl-2">
              {photo.peso} Kg
            </span>
            <span className="border-l-2 border-l-black pl-2">
              {photo.idade} anos
            </span>
          </div>
        </div>

        <Comments comments={comments} photoId={photo.id} />
      </div>
    </section>
  );
}
