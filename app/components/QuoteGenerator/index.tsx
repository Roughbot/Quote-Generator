import { Backdrop, Fade, Modal } from "@mui/material";
import React from "react";
import {
  ModalCircularProgress,
  QuoteGeneratorModelCon,
  QuoteGeneratorModelInnerCon,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle,
} from "./QuoteGeneratorElement";

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
            {!processingQuote && quoteReceived && (
              <>
                <QuoteGeneratorTitle>Your Quote is Ready!</QuoteGeneratorTitle>
                <QuoteGeneratorSubTitle style={{ marginTop: "20px" }}>
                  {quoteReceived}
                </QuoteGeneratorSubTitle>
              </>
            )}
          </QuoteGeneratorModelInnerCon>
        </QuoteGeneratorModelCon>
      </Fade>
    </Modal>
  );
};

export default QuoteGeneratorModel;
