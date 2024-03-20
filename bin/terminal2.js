import axios from "axios";
import * as cheerio from "cheerio";
import fs from "node:fs";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

if (!fs.existsSync("cache")) {
  fs.mkdir("cache");
}

let baseurl = "http://wumo.com"
let link = "/wumo/2024/"

for (i = 2905; i > 2805; i--) {
  cacheName = `cache/${i}.html`;
  let data;
  if (!fs.existsSync(cacheName)) {
    await sleep(1000);
    let result = await axios.get(`https://xkcd.com/${i}/`);
    data = result.data;
    fs.writeFileSync(cacheName, data);
    console.log(`Live request for ${i}`);
  }
  const $ = cheerio.load(data);
  let img = $("div#comic>img");
  console.log(img.attr("src"));
  console.log(img.attr("title"));
  console.log(img.attr("alt"));
}
