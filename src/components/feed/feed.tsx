"use client";

import React from "react";
import { Photo } from "@/@types/global";
import { FeedPhotos } from "./feed-photos";
import { useInfiniteQuery } from "@tanstack/react-query";
import { handleApiError } from "@/utils/handle-errors";
import { useInView } from "react-intersection-observer";
import { PhotosSkeleton } from "../photo/photos-skeleton";

interface FeedContainerProps {
  isUserIdNeeded?: boolean;
}

const PHOTOS_PER_PAGE = 4;
const STALE_TIME_IN_MILISECONDS = 60;

async function fetchPhotos({ pageParam }: { pageParam: number }) {
  try {
    const response = await fetch(
      `/api/photo?total=${PHOTOS_PER_PAGE}&page=${pageParam}&user=${0}`,
    );
    if (!response.ok) {
      throw new Error("Ocorreu um erro ao buscar as imagens");
    }
    const data = (await response.json()) as Photo[];

    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export function Feed({ isUserIdNeeded = false }: FeedContainerProps) {
  const { data, error, status, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["feed"],
      staleTime: STALE_TIME_IN_MILISECONDS,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      queryFn: fetchPhotos,
      initialPageParam: 1,
      getNextPageParam: (firstPageParam, allPages, lastPageParam) =>
        firstPageParam.length ? lastPageParam + 1 : undefined,
    });
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

  if (status === "pending") return <PhotosSkeleton />;
  if (status === "error") return <h1>{error.message}</h1>;
  if (data)
    return (
      <div className="container my-6">
        <ul className="flex flex-col gap-4">
          {data.pages.map((photos, i) => {
            if (typeof photos === "string") return;
            return <FeedPhotos key={i} photos={photos} />;
          })}
          <div ref={ref}>
            {isFetching && status === "success" && "Carregando..."}
          </div>
        </ul>
      </div>
    );
}
