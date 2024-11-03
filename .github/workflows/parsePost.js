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

    const extractedUUID = extractUUID(latestEpisode.enclosure_url);
    console.log(extractedUUID);


}

function extractUUID(url) {
    // UUIDの正規表現パターン
    const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;

    // URLからUUIDを抽出
    const match = url.match(uuidRegex);

    //
    return match ? match[0] : null;
}

parsePost();
