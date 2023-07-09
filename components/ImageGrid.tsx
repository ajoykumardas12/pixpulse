import { imageData } from "@/store/data";
import React from "react";
import ImageCard from "./ImageCard";

export default function ImageGrid({
  selectImage,
}: {
  selectImage: (id: string) => void;
}) {
  return (
    <div className="px-6 py-4">
      <h1 className="text-xl mb-4">Today&apos;s Picks</h1>
      <div className="xxs:columns-2 md:columns-3 2xl:columns-4 gap-4 md:gap-6">
        {imageData.map((image) => {
          return (
            <ImageCard key={image.id} image={image} selectImage={selectImage} />
          );
        })}
      </div>
    </div>
  );
}
