/* eslint-disable @next/next/no-img-element */
import { ImageType } from "@/types";
import { motion } from "framer-motion";
import React from "react";

export default function ImageModal({
  selectedImage,
  selectImage,
}: {
  selectedImage: ImageType;
  selectImage: (image: ImageType | null) => void;
}) {
  return (
    <div
      className="fixed inset-0 flex justify-center bg-mid/40 p-4"
      onClick={() => selectImage(null)}
    >
      <div
        className="m-auto flex flex-col items-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <motion.div layoutId={selectedImage.id}>
          <img
            src={selectedImage.url}
            alt=""
            className="rounded max-h-[calc(100vh-2rem)]"
          />
        </motion.div>
      </div>
    </div>
  );
}
