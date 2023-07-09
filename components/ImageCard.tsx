/* eslint-disable @next/next/no-img-element */
import { ImageType } from "@/types";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";

export default function ImageCard({
  image,
  selectImage,
}: {
  image: ImageType;
  selectImage: (id: string) => void;
}) {
  return (
    <div
      className="w-full inline-block mb-6 cursor-pointer"
      onClick={() => selectImage(image.id)}
    >
      <img
        src={image.url}
        alt={image.title}
        loading="lazy"
        className="w-full max-h-96 object-cover rounded"
      />
    </div>
  );
}
