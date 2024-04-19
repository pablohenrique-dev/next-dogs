"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface ImageWithSkeletonProps extends ImageProps {}

export function ImageWithSkeleton({
  src,
  alt,
  sizes,
  width,
  height,
  className,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      {isLoading && (
        <div className="dark:bg-neutral00 aspect-square min-w-full animate-pulse overflow-hidden rounded border bg-neutral-light"></div>
      )}
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        width={width}
        height={height}
        style={{
          objectFit: "contain",
        }}
        className={twMerge(
          "rounded",
          className,
          isLoading ? "h-0 w-0" : "animate-fade-in",
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </>
  );
}
