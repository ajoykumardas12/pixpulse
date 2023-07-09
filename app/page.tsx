"use client";
import ImageGrid from "@/components/ImageGrid";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const selectImage = (id: string) => {
    setSelectedImage(id);
  };
  return (
    <div className="flex ">
      <ImageGrid selectImage={selectImage} />
    </div>
  );
}
