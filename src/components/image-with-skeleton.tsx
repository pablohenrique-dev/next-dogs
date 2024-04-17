"use client";

import React from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithSkeletonProps extends ImageProps {}

export function ImageWithSkeleton({
  src,
  alt,
  sizes,
  width,
  height,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      {isLoading && (
        <div className="dark:bg-neutral00 aspect-square w-full animate-pulse overflow-hidden rounded border bg-neutral-light"></div>
      )}
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        width={width}
        height={height}
        className={`rounded ${isLoading ? "h-0 w-0" : "w-full animate-fade-in"}`}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </>
  );
}
