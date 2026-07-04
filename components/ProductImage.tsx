"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImage({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) return null;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setErrored(true)}
    />
  );
}
