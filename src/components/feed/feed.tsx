"use client";

import React from "react";
import { FeedPhotos } from "./feed-photos";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { Loading } from "../loading";
import { photosGet } from "@/utils/photos-get";

const PHOTOS_PER_PAGE = 4;
const STALE_TIME_IN_MILISECONDS = 10;

interface FeedProps {
  username: string | null;
  fallback?: React.ReactNode;
}

export function Feed({ username, fallback }: FeedProps) {
  const { data, error, status, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["feed"],
      staleTime: STALE_TIME_IN_MILISECONDS,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      throwOnError: true,
      queryFn: ({ pageParam }) =>
        photosGet({
          pageParam,
          postPerPage: PHOTOS_PER_PAGE,
          user: username || 0,
        }),
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

  if (status === "pending")
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loading />
      </div>
    );

  if (status === "error")
    return (
      <h1 className="text-center text-3xl font-semibold leading-[130%] md:text-5xl">
        {error.message}
      </h1>
    );

  if (data?.pages[0].length === 0 && fallback) return fallback;

  return (
    <div className="my-6">
      <ul className="flex flex-col gap-2 sm:gap-4">
        {data.pages.map((photos, i) => {
          if (!photos) return;
          return <FeedPhotos key={i} photos={photos} pageIndex={i} />;
        })}
        <div ref={ref} className={isFetching ? "my-2" : ""}>
          {isFetching && status === "success" && <Loading />}
        </div>
        {!hasNextPage && !isFetching && (
          <p className="mb-12 mt-1 animate-fade-in text-center text-base sm:text-lg">
            Não existem mais postagens.
          </p>
        )}
      </ul>
    </div>
  );
}
