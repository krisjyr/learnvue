import axios from "axios";
import * as cheerio from "cheerio";
import fs from "node:fs";
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if (!fs.existsSync("cache")) {
  fs.mkdirSync("cache");
}

for (let i = 899; i <= 899; i++) {
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
  console.log(`Comic nr ${i}`);

  let img = $(`#comic>img`);

  console.log(img.length);

  for (let i = 0; i <= img.length; i++) {
    console.log(i);
    if (img.attr("src") !== undefined) {
      console.log(img.attr("src"));
      img = img.next();
    } else {
      img = img.next();
      console.log(img.attr("src"));
      img = img.next();
    }
  }
}
