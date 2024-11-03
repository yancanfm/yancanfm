const Parser = require('rss-parser');
const parser = new Parser();
const feed = await parser.parseURL('https://example.com/feed.xml');

feed.items.forEach(item => {
    console.log(item.title);
    console.log(item.link);
});
