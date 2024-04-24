import { Eye } from "../icon/eye";
import { Comment } from "../icon/comment";
import Link from "next/link";
import { Photo } from "@/@types/global";
import { ImageWithSkeleton } from "../image-with-skeleton";

interface PhotoItemProps {
  photo: Photo;
  pageIndex: number;
}

export function PhotoItem({ photo, pageIndex }: PhotoItemProps) {
  return (
    <li key={photo.id} className="group relative overflow-hidden rounded">
      <Link href={`/photo/${photo.id}`} scroll={false}>
        <div className="absolute left-0 top-0 flex h-full w-full items-end justify-center gap-4 bg-gradient-to-t from-[#000000ac] p-6 opacity-0 transition-all group-hover:opacity-100">
          <span className="flex animate-fade-top items-center gap-2 font-body text-base text-white">
            <Eye color="white" />
            {Number(photo.acessos).toLocaleString("pt-BR")}
          </span>
          <span className="flex animate-fade-top items-center gap-2 font-body text-base text-white">
            <Comment color="white" />
            {Number(photo.total_comments).toLocaleString("pt-BR")}
          </span>
        </div>

        <ImageWithSkeleton
          src={photo.src}
          alt={photo.title}
          width={506}
          height={506}
          sizes="50vw"
          priority={pageIndex === 0}
        />
      </Link>
    </li>
  );
}
