/* eslint-disable @next/next/no-img-element */
import { ImageType } from "@/types";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

export default function ImageCard({
  image,
  selectImage,
}: {
  image: ImageType;
  selectImage: (img: ImageType) => void;
}) {
  return (
    <motion.div
      layoutId={image.id}
      className="w-full inline-block mb-3 md:mb-6 cursor-pointer"
      onClick={() => selectImage(image)}
    >
      <img
        src={image.url}
        alt={image.title}
        loading="lazy"
        className="w-full max-h-96 object-cover rounded"
      />
    </motion.div>
  );
}
