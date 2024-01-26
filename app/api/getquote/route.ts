import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import fetch from "node-fetch";
import path from "path";

async function getQuote(apiURL: string): Promise<Buffer> {
  let quoteText;
  let quoteAuthor;

  const response = await fetch(apiURL.toString());
  var quoteData: any = await response.json();

  quoteText = quoteData[0].q;
  quoteAuthor = quoteData[0].a;
  console.log(quoteText);
  console.log(quoteAuthor);

  const width = 1366;
  const height = 768;
  const text = quoteText;
  const words = text.split(" ");
  const lineBreak = 5;
  let newText = "";

  let tspanElements = "";
  for (let i = 0; i < words.length; i++) {
    newText += words[i] + " ";
    if ((i + 1) % lineBreak === 0) {
      tspanElements += `<tspan x="${
        width / 2
      }" font-size="55" dy='1.2em'> ${newText} </tspan>`;
      newText = "";
    }
  }
  if (newText !== "") {
    tspanElements += `<tspan x="${
      width / 2
    }" font-size="55" dy='1.2em'> ${newText} </tspan>`;
  }

  const backgroundImages = [
    "/assets/background/Celestial.jpg",
    "/assets/background/CoolSky.jpg",
    "/assets/background/DarkOcean.jpg",
    "/assets/background/DigitalWater.jpg",
    "/assets/background/GreenandBlue.jpg",
    "/assets/background/KeyMeh.jpg",
    "/assets/background/Memariani.jpg",
    "/assets/background/Telegram.jpg",
  ];

  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const backgroundImagePath = backgroundImages[randomIndex];
  const quoteY = height / 3;
  const lineHeight = 55 * 1.2; // Adjust this value based on your font size
  const quoteLines = tspanElements.split("<tspan").length - 1; // Count the number of lines in the quote
  const authorY = quoteY + quoteLines * lineHeight + 50; // Calculate the y position of the author's name
  const absolutePath = path.join(process.cwd(), "public", backgroundImagePath);
  const imageBuffer = await sharp(absolutePath)
    .composite([
      {
        input:
          Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <text x="${
          width / 2
        }" y="${quoteY}" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle">
            ${tspanElements}
        </text>
        <text x="${
          width / 2
        }" y="${authorY}" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" font-size="40">
            - ${quoteAuthor}
        </text>
    </svg>`),
        top: 0,
        left: 0,
      },
    ])
    .toBuffer();

  return imageBuffer;
}

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method !== "GET") {
    res.headers.set("Allow", "GET");
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
  const imageBuffer = await getQuote("https://zenquotes.io/api/random");

  if (!imageBuffer) {
    return NextResponse.json(
      { error: "Error generating image" },
      { status: 500 }
    );
  }

  return new NextResponse(imageBuffer, {
    headers: { "Content-Type": "image/png", "Cache-Control": "no-store" },
  });
}
