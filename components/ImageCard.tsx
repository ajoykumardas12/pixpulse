/* eslint-disable @next/next/no-img-element */
import { ImageType } from "@/types";
import React from "react";
import { motion } from "framer-motion";

export default function ImageCard({
  image,
  selectImage,
}: {
  image: ImageType;
  selectImage: (img: ImageType) => void;
}) {
  return (
    <div className="w-full inline-block mb-3 md:mb-6 cursor-pointer">
      <motion.img
        src={image.url}
        alt={image.title}
        layoutId={image.id}
        transition={{ duration: 0.3 }}
        loading="lazy"
        className="w-full max-h-96 object-cover rounded"
        onClick={() => selectImage(image)}
      />
    </div>
  );
}
