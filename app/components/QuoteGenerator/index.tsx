import { Backdrop, Fade, Modal } from "@mui/material";
import React from "react";
import {
  QuoteGeneratorModelCon,
  QuoteGeneratorModelInnerCon,
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
          <QuoteGeneratorModelInnerCon></QuoteGeneratorModelInnerCon>
        </QuoteGeneratorModelCon>
      </Fade>
    </Modal>
  );
};

export default QuoteGeneratorModel;
