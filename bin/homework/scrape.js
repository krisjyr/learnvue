import axios from "axios";
import * as cheerio from "cheerio";
import fs from "node:fs";
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if (!fs.existsSync("cache")) {
  fs.mkdirSync("cache");
}

for (let i = 1; i <= 900; i++) {
  let cacheName = `cache/${i}.html`;
  let data;
  if (!fs.existsSync(cacheName)) {
    await sleep(1000);
    let res = await axios.get(`https://gunshowcomic.com/${i}`);
    data = res.data;
    fs.writeFileSync(cacheName, data);
  } else {
    data = fs.readFileSync(cacheName);
  }
  const $ = cheerio.load(data);

  let img = $(`#comic>img`);
  const imglength = img.length;
  let next = img

  console.log(`\n`)
  console.log(`\u001B[32mComic length: ${img.length}\u001B[0m`);
  console.log(`\u001b[38;2;253;182;0mComic nr ${i}\u001B[0m`);


  //Kood on pikem kuna hiljem hakkab tulema koomikseid millel mitmeid pilte. Pidin lisama loopi et kõik koomiksi pildid kätte saada.
  for (let i = 0; i < imglength; i++) {
    if (next.attr("src") !== undefined) {
      console.log(next.attr("src"));
      next = next.nextUntil('img').next();
    } else {
      console.log("No image found");
    }
  }
}
