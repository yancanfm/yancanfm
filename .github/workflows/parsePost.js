async function parsePost() {
    const Parser = require('rss-parser');
    const parser = new Parser();
    const feed = await parser.parseURL('https://rss.art19.com/yancanfm');

    console.log("🐶")
    const latestEpisode = feed.items[0];
    console.log("🐱")
    console.log(JSON.stringify(latestEpisode.enclosure, null, 2));
    console.log(latestEpisode);
    console.log(latestEpisode.title);
    console.log(latestEpisode.enclosure_url);
}

parsePost();
