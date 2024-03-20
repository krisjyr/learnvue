import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'node:fs';
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if(!fs.existsSync('cache')){
    fs.mkdirSync('cache');
}

for(let i = 1; i < 10; i++){
    
    let cacheFile = `cache/${i}.json`;
    let data;
    if(!fs.existsSync(cacheFile)){
        await sleep(1000);
        let res = await axios.post('https://kinnisvara24.ee/search', {
            page: i
        });
        data = res.data;
        fs.writeFileSync(cacheFile, JSON.stringify(data));
        console.log('LIVE REQUEST!!!!');
    } else {
        data = JSON.parse(fs.readFileSync(cacheFile));
    }
    
    data.data.forEach(ad => {
        if(ad.address.address){
            console.log(ad.hind, ad.address.address);
        } else {
            console.log(ad.hind, ad.address.short_address);
        }
    });
}

// god help us all