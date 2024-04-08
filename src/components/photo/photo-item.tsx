"use client";

import Image from "next/image";
import React from "react";
import { Eye } from "../icon/eye";
import { Comment } from "../icon/comment";
import Link from "next/link";
import { Photo } from "@/@types/global";

interface PhotoItemProps {
  photo: Photo;
  photoIndex: number;
}

export function PhotoItem({ photo, photoIndex }: PhotoItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={photo.id}
      className="relative overflow-hidden rounded"
    >
      <Link href={`/?photo=${photo.id}`} scroll={false}>
        {isHovered && (
          <div className="absolute left-0 top-0 flex h-full w-full items-end justify-center gap-4 bg-gradient-to-t from-[#000000ac] p-6">
            <span className="flex animate-fade-top items-center gap-2 font-body text-base text-white">
              <Eye color="white" />
              {Number(photo.acessos).toLocaleString("pt-BR")}
            </span>
            <span className="flex animate-fade-top items-center gap-2 font-body text-base text-white">
              <Comment color="white" />
              {Number(photo.total_comments).toLocaleString("pt-BR")}
            </span>
          </div>
        )}

        <Image
          src={photo.src}
          alt={photo.title}
          width={506}
          height={506}
          sizes="70vw"
          priority={photoIndex < 4}
        />
      </Link>
    </li>
  );
}
