"use client";

import { HeadingDetail } from "../heading-detail";
import { Eye } from "../icon/eye";
import { Comments } from "../comments";
import { useUser } from "@/context/user-context";
import { PhotoDelete } from "./photo-delete";
import { ImageWithSkeleton } from "../image-with-skeleton";
import { useRouter } from "next/navigation";
import { Plus } from "../icon/plus";
import { PhotoContentType } from "@/@types/global";

interface PhotoContentProps {
  photoContent: PhotoContentType;
  isModal: boolean;
}

export function PhotoContent({
  photoContent: { photo, comments },
  isModal,
}: PhotoContentProps) {
  const { user } = useUser();
  const router = useRouter();

  function handleCloseModal() {
    router.back();
  }

  return (
    <div
      className={
        isModal
          ? "relative flex max-h-[540px] flex-col overflow-y-scroll rounded bg-white lg:h-auto lg:flex-row lg:overflow-auto"
          : "container my-6 rounded"
      }
    >
      <ImageWithSkeleton
        src={photo.src}
        alt={photo.title}
        width={1216}
        height={1216}
        sizes="70vw"
        className={`aspect-square rounded ${isModal ? "max-w-[540px]" : "w-full"}`}
        priority
      />
      {isModal && (
        <button
          onClick={handleCloseModal}
          className="absolute right-5 top-5 inline-block rotate-45 rounded-full bg-[#2929299b] py-[3px] md:hidden"
        >
          <Plus color="white" size="big" />
        </button>
      )}
      <aside
        className={`flex flex-col justify-between ${isModal && "p-4 md:p-6 lg:max-w-[320px]"}`}
      >
        <div>
          <div
            className={`mb-6 flex items-center justify-between text-lg opacity-75 ${!isModal && "my-6 "}`}
          >
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
            <h2 className="relative z-50 font-heading text-4xl sm:mb-6 sm:text-5xl">
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
        </div>

        <Comments comments={comments} photoId={photo.id} />
      </aside>
    </div>
  );
}
