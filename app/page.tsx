"use client";
import ImageGrid from "@/components/ImageGrid";
import ImageModal from "@/components/ImageModal";
import { ImageType } from "@/types";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<null | ImageType>(null);

  const selectImage = (image: ImageType | null) => {
    if (image) {
      setSelectedImage(image);
    } else {
      setSelectedImage(null);
    }
  };
  return (
    <div className="">
      <ImageGrid selectImage={selectImage} />
      {selectedImage && (
        <ImageModal selectedImage={selectedImage} selectImage={selectImage} />
      )}
    </div>
  );
}
