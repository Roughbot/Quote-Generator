"use client";
import { useState } from "react";
import {
  GradientBackground,
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  RedSpan,
  FooterLink,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
} from "./components/QuoteGenerator/QuoteGeneratorElement";
import cloud1 from "../public/assets/cloudy-night.png";
import cloud2 from "../public/assets/cloudy-day.png";
import QuoteGeneratorModel from "./components/QuoteGenerator";

export default function Home() {
  const [openGenerator, setOpenGenerator] = useState(false);
  const handleCloseGenerator = () => setOpenGenerator(false);
  const [processingQuote, setProcessingQuote] = useState(false);
  const [quoteReceived, setQuoteReceived] = useState<String | null>(null);

  const handleOpenGenerator = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setOpenGenerator(true);
  };

  return (
    <GradientBackground>
      <QuoteGeneratorModel
        open={openGenerator}
        close={handleCloseGenerator}
        processingQuote={processingQuote}
        setProcessingQuote={setProcessingQuote}
        quoteReceived={quoteReceived}
        setQuoteReceived={setQuoteReceived}
      />

      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>Quote Generator</QuoteGeneratorTitle>
          <QuoteGeneratorSubTitle>
            Looking for some inspiration? Generate a quote! <br /> Provided by{" "}
            <FooterLink
              href="https://zenquotes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZenQuotes API
            </FooterLink>
          </QuoteGeneratorSubTitle>

          <GenerateQuoteButton>
            <GenerateQuoteButtonText onClick={handleOpenGenerator}>
              Generate Quote
            </GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>

      <BackgroundImage1
        src={cloud1}
        priority={true}
        height={300}
        alt="cloud1"
      />
      <BackgroundImage2
        src={cloud2}
        priority={true}
        height={300}
        alt="cloud2"
      />

      {/*Footer*/}
      <FooterCon>
        <>
          Developed with <RedSpan>♥ </RedSpan>
          by{" "}
          <FooterLink
            href="github.com/roughbot/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Sathyanarayanan
          </FooterLink>
        </>
      </FooterCon>
    </GradientBackground>
  );
}
