/* eslint-disable @next/next/no-img-element */
import { ImageType } from "@/types";
import { motion } from "framer-motion";
import React, { useRef } from "react";

export default function ImageModal({
  selectedImage,
  selectImage,
}: {
  selectedImage: ImageType;
  selectImage: (image: ImageType | null) => void;
}) {
  const modalRef = useRef(null);
  return (
    <div
      ref={modalRef}
      className="fixed inset-0 flex justify-center bg-mid/40 p-4"
      onClick={() => selectImage(null)}
    >
      <div
        className="m-auto flex flex-col items-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <motion.img
          src={selectedImage.url}
          alt=""
          className="rounded max-h-[calc(100vh-2rem)]"
          layoutId={selectedImage.id}
          transition={{ duration: 0.2 }}
          drag
          dragConstraints={modalRef}
          whileDrag={{ scale: 0.9 }}
          onDragEnd={() => selectImage(null)}
        />
      </div>
    </div>
  );
}
