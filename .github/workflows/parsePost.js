async function parsePost() {
    const Parser = require('rss-parser');
    const parser = new Parser();
    const feed = await parser.parseURL('https://rss.art19.com/yancanfm');

    console.log("🐶")
    const latestEpisode = feed.items[0];
    console.log(latest.title);
    console.log(latest.enclosure_url);
}

parsePost();
