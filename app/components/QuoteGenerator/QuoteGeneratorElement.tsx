import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

export const GradientBackground = styled.div`
  background: linear-gradient(to right, #000046, #1cb5e0);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const BackgroundImage1 = styled(Image)`
  position: relative;
  z-index: 1;
  margin-top: 20px;
  margin-left: -22px;
`;

export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  right: 0px;
  bottom: -10px;
`;

export const FooterCon = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  font-family: "Source Code Pro", monospace;
  font-size: 15px;
  position: absolute;
  color: white;
  bottom: 0;
  z-index: 9999999;
`;

export const RedSpan = styled.span`
  color: #ff0000;
`;

export const FooterLink = styled(Link)`
  color: white;
  underline: 1px solid white;
  &:hover {
    color: #00ff99;
  }
`;

export const QuoteGeneratorCon = styled.div`
  min-height: 350px;
  min-width: 350px;
  height: 70vh;
  width: 70vw;
  border: 2px solid #ffffff22;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;

  background: rgba(146, 125, 207, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const QuoteGeneratorInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`;

export const QuoteGeneratorTitle = styled.div`
  font-family: "Permanent Marker", cursive;
  font-size: 50px;
  color: white;
  text-align: center;
  position: relative;
  padding: 0px 20px 0px 20px;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const QuoteGeneratorSubTitle = styled.div`
  color: white;
  font-family: "Caveat Brush", cursive;
  font-size: 35px;
  text-align: center;
  position: relative;
  width: 100%;
  padding: 0px 20px 0px 20px;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

export const GenerateQuoteButton = styled.div`
  height: 100px;
  width: 300px;
  border: 2px solid darkgrey;
  margin-top: 20px;
  border-radius: 20px;

  position: relative;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: auto;
  top: 20px;
  transform-origin: center;

  background: rgba(25, 179, 110, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &:hover {
    filter: brightness(3);
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    transform-origin: center;
  }
`;

export const GenerateQuoteButtonText = styled.div`
  color: white;
  font-family: "Caveat Brush", cursive;
  font-size: 35px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  text-align: center;
`;

export const QuoteGeneratorModelCon = styled(Box)`
  position: absolute;
  width: 70vw;
  height: 70vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(146, 125, 207, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const QuoteGeneratorModelInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
`;
