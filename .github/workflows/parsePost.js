async function parsePost() {
    console.log("🐶")
    const Parser = require('rss-parser');
    const parser = new Parser();
    const feed = await parser.parseURL('https://rss.art19.com/yancanfm');

    feed.items.first(item => {
        console.log(item.title);
    });
}

parsePost();
