const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");
const Parser = require("rss-parser");
let parser = new Parser();

try {
  const rssUrl = core.getInput("url");
  console.log(`RSSのURL ${rssUrl}`); // ログに出力

  (async () => {
    let feed = await parser.parseURL(rssUrl);
    console.log(feed.title);

    let latest = feed.items[0];
    let embedUrl = latest.link.replace("/episodes", "/embed/episodes");

    core.setOutput("title", latest.title);
    core.setOutput("link", embedUrl);
    core.setOutput("content", latest.content);
    core.setOutput("date", latest.pubDate);
  })();
} catch (error) {
  core.setFailed(error.message);
}
