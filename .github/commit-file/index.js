const github = require("@actions/github");
const core = require("@actions/core");
const artifact = require("@actions/artifact");
const artifactClient = artifact.create();

try {
  async function main() {
    const downloadResponse = await artifactClient.downloadAllArtifacts();
  }
  main().catch((error) => {
    core.setFailed(error.message);
  });
} catch (error) {
  core.setFailed(error.message);
}
