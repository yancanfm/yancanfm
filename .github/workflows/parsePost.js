async function parsePost() {
    const Parser = require('rss-parser');
    const parser = new Parser();
    const feed = await parser.parseURL('https://rss.art19.com/yancanfm');

    console.log("🐶")
    const latestEpisode = feed.items[0];
    console.log(JSON.stringify(latestEpisode.enclosure, null, 2));
    console.log(latestEpisode);
    console.log(latestEpisode.title);
    console.log(latestEpisode.enclosure.url);

    const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;
    const url = latestEpisode.enclosure.url.match(uuidRegex);
    console.log(url ? url[0] : "No match found");

    const fs = require('fs');

    fs.writeFile('hello.txt', 'Hello, world!', (err) => {
        if (err) throw err;
        console.log('File has been created and saved!');
    });
}

parsePost();
