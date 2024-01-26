import React from "react";
import Image from "next/image";
import { useState } from "react";

interface ImageBlogProps {
  quoteReceived: String;
  blobUrl: string | null;
}

const ImageBlob = ({ quoteReceived, blobUrl }: ImageBlogProps) => {
  return <div>Image</div>;
};

export default ImageBlob;
