import React from "react";
import Image from "next/image";

interface ImageBlogProps {
  blobUrl: string | null;
}

const ImageBlob = ({ blobUrl }: ImageBlogProps) => {
  return blobUrl && <Image src={blobUrl} alt="quote" width={140} height={70} />;
};

export default ImageBlob;
