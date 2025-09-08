"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface FallbackImageProps extends Omit<ImageProps, "src"> {
  src: string | null | undefined;
  fallbackSrc?: string;
}

/**
 * FallbackImage Component
 *
 * An extension of Next.js Image component that handles image loading errors
 * by displaying a fallback image when the source image fails to load.
 *
 * @param src - The primary image source URL
 * @param fallbackSrc - The fallback image source URL (defaults to /images/placeholder.png)
 * @param props - All other Next.js Image props
 */
export default function FallbackImage({
  src,
  fallbackSrc = "/images/placeholder.png",
  alt,
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc);
  const [error, setError] = useState<boolean>(false);

  const handleError = () => {
    if (!error) {
      setImgSrc(fallbackSrc);
      setError(true);
    }
  };

  return (
    <Image {...props} src={imgSrc} alt={alt || "Image"} onError={handleError} />
  );
}
