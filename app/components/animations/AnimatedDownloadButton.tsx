import React from "react";
import Image from "next/image";
import lottiejson from "../../../public/assets/Animation - 1706253549350.json";
import {
  CenteredLottie,
  DownloadQuiteCardCon,
  DownloadQuiteCardConText,
} from "./AnimationElement";

interface AnimatedDownloadButtonProps {
  handleDownload: () => void;
}

const AnimatedDownloadButton = ({
  handleDownload,
}: AnimatedDownloadButtonProps) => {
  return (
    <DownloadQuiteCardCon onClick={handleDownload}>
      <CenteredLottie loop animationData={lottiejson} play />
      <DownloadQuiteCardConText>
        Download Your Quote Card..
      </DownloadQuiteCardConText>
    </DownloadQuiteCardCon>
  );
};

export default AnimatedDownloadButton;
