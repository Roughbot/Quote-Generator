import { Backdrop, Fade, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ModalCircularProgress,
  QuoteGeneratorModelCon,
  QuoteGeneratorModelInnerCon,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle,
} from "./QuoteGeneratorElement";
import ImageBlob from "../animations/ImageBlob";
import { ImageBlobCon } from "../animations/AnimationElement";
import AnimatedDownloadButton from "../animations/AnimatedDownloadButton";
import { log } from "console";

interface QuoteGeneratorModalProps {
  open: boolean;
  close: () => void;
  processingQuote: boolean;
  setProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
  quoteReceived: String | null;
  setQuoteReceived: React.Dispatch<React.SetStateAction<String | null>>;
}

const style = {};

const QuoteGeneratorModel = ({
  open,
  close,
  setProcessingQuote,
  setQuoteReceived,
  processingQuote,
  quoteReceived,
}: QuoteGeneratorModalProps) => {
  const wiseDevQuote = '"If it works and it is ugly, it is JavaScript."';
  const wiseDevQuoteAuther = "- A wise developer";

  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    if (quoteReceived) {
      const binaryData = Buffer.from(quoteReceived, "base64");
      const blob = new Blob([binaryData], { type: "image/png" });
      const blobUrlGenerated = URL.createObjectURL(blob);
      console.log(blobUrlGenerated);
      setBlobUrl(blobUrlGenerated);

      return () => {
        URL.revokeObjectURL(blobUrlGenerated);
      };
    }
  }, [quoteReceived]);

  const handleDownload = () => {
    const link = document.createElement("a");
    if (typeof blobUrl === "string") {
      link.href = blobUrl;
      link.download = "quote.png";
      link.click();
    }
  };

  return (
    <Modal
      id="quote-generator"
      aria-labelledby="quote-generator-title"
      aria-describedby="quote-generator-description"
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <QuoteGeneratorModelCon sx={style}>
          <QuoteGeneratorModelInnerCon>
            {processingQuote && !quoteReceived && (
              <>
                <ModalCircularProgress size={"8rem"} thickness={2.5} />
                <QuoteGeneratorTitle>
                  Creating Your Quote...
                </QuoteGeneratorTitle>
                <QuoteGeneratorSubTitle style={{ marginTop: "20px" }}>
                  {wiseDevQuote}
                  <br />
                  <span style={{ fontSize: "1.2rem" }}>
                    {wiseDevQuoteAuther}
                  </span>
                </QuoteGeneratorSubTitle>
              </>
            )}
            {quoteReceived && (
              <>
                <QuoteGeneratorTitle>Download Your Quote!</QuoteGeneratorTitle>
                <QuoteGeneratorSubTitle style={{ marginTop: "20px" }}>
                  Preview...
                </QuoteGeneratorSubTitle>
                <ImageBlobCon>
                  <ImageBlob quoteReceived={quoteReceived} blobUrl={blobUrl} />
                </ImageBlobCon>
                <AnimatedDownloadButton handleDownload={handleDownload} />
              </>
            )}
          </QuoteGeneratorModelInnerCon>
        </QuoteGeneratorModelCon>
      </Fade>
    </Modal>
  );
};

export default QuoteGeneratorModel;
