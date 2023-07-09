/* eslint-disable @next/next/no-img-element */
import { ImageType } from "@/types";
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
      className="fixed inset-0 flex justify-center bg-mid/30 overflow-y-auto backdrop-blur-[2px]"
      onClick={() => selectImage(null)}
    >
      <div
        className="w-11/12 max-w-[600px] flex flex-col items-center bg-light p-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={selectedImage.url} alt="" className="" />
      </div>
    </div>
  );
}
