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

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <GradientBackground>
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
            <GenerateQuoteButtonText onClick={null}>
              Generate Quote
            </GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>

      {/*Footer*/}
      <FooterCon>
        <>
          Quotes Generated: {numberOfQuotes}
          <br />
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
