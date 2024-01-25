const sharp = require("sharp");
const apiURL = "https://zenquotes.io/api/random";
const fetch = require("node-fetch");

async function getQuote(api) {
  let quoteText;
  let quoteAuthor;

  const response = await fetch(api);
  var quoteData = await response.json();

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
  for (i = 0; i < words.length; i++) {
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
    "background/Celestial.jpg",
    "background/Telegram.jpg",
    "background/Memariani.jpg",
    "background/CoolSky.jpg",
    "background/DarkOcean.jpg",
    "background/DigitalWater.jpg",
    "background/GreenandBlue.jpg",
    "background/KeyMeh.jpg",
  ];

  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const backgroundImagePath = backgroundImages[randomIndex];
  const timestamp = Date.now();
  const outputImagePath = `finalOutPut/quote_${timestamp}.png`;

  const quoteY = height / 3;
  const lineHeight = 55 * 1.2; // Adjust this value based on your font size
  const quoteLines = tspanElements.split("<tspan").length - 1; // Count the number of lines in the quote
  const authorY = quoteY + quoteLines * lineHeight + 50; // Calculate the y position of the author's name

  await sharp(backgroundImagePath)
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
        }" y="${authorY}" text-anchor="middle" dominant-baseline="middle" alignment-baseline="middle" font-size="25">
            - ${quoteAuthor}
        </text>
    </svg>`),
        top: 0,
        left: 0,
      },
    ])
    .toFile(outputImagePath);
}

getQuote(apiURL);
