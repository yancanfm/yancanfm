async function parsePost() {
    const Parser = require('rss-parser');
    const parser = new Parser();
    const feed = await parser.parseURL('https://rss.art19.com/yancanfm');

    console.log("🐶")
    const latestEpisode = feed.items[0];
    console.log(JSON.stringify(latestEpisode.enclosure, null, 2));

    const titleNumber = latestEpisode.title.match(/\d+/g);
    const title = latestEpisode.title
    const enclosure_url = latestEpisode.enclosure.url
    const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;
    const urlId = enclosure_url.match(uuidRegex);
    const content = latestEpisode.content
    const dateString = latestEpisode.pubDate
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const audioFilePath = `https://art19.com/shows/${urlId}/episodes/${urlId}/embed`

    const fs = require('fs');

    fs.writeFile(`_posts/${formattedDate}-${titleNumber}.md`, `---\nactor_ids:\n  - rihoyan\n  - risacan\ntitle: '${title}'\ndate: ${formattedDate}\nlayout: art19\nenclosure_url: ${enclosure_url}\naudio_file_path: ${audioFilePath}\n---\n${content}`, (err) => {
        if (err) throw err;
        console.log('File has been created and saved!');
    });
}

parsePost();
