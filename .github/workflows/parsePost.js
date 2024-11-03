async function parsePost() {
    console.log("🐶")
    const Parser = require('rss-parser');
    const parser = new Parser();
    const feed = await parser.parseURL('https://rss.art19.com/yancanfm');

    feed.items.forEach(item => {
        console.log(item.title);
        console.log(item.link);
    });
}

parsePost();
