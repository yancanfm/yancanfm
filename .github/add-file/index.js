const core = require("@actions/core");
const fs = require("fs");
const artifact = require("@actions/artifact");

try {
  const title = core.getInput("title");
  const link = core.getInput("link");
  const content = core.getInput("content");
  const date = core.getInput("date");

  text = `---
actor_ids:
    - rihoyan
    - risacan
audio_file_path: ${link}
date: ${date}
layout: anchor
title: ${title}
---
${content}
  `;
  const parsedDate = new Date(date);
  const month = ("0" + (parsedDate.getMonth() + 1)).slice(-2);
  const day = ("0" + parsedDate.getDate()).slice(-2);
  const episodeNumber = title.match(/\d+/)[0];
  const fileName = `${parsedDate.getFullYear()}-${month}-${day}-${episodeNumber}.md`;

  fs.writeFileSync(fileName, text);

  const artifactClient = artifact.create();
  const artifactName = "_posts";

  const files = [fileName];
  const rootDirectory = ".";
  const options = {
    continueOnError: false,
  };

  async function main() {
    const uploadResponse = await artifactClient.uploadArtifact(
      artifactName,
      files,
      rootDirectory,
      options
    );
  }
  main().catch((error) => {
    core.setFailed(error.message);
  });
} catch (error) {
  core.setFailed(error.message);
}
