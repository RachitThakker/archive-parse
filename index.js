import readJsonFile from "./readJsonFile.js";
import generateMarkdown from "./generateMarkdown.js";
import writeMarkdownToFile from "./writeMarkdownToFile.js";

// Usage
async function main() {
  // const url =
  //   "https://ekr.zdassets.com/compose/web_widget/oneskyhelp.zendesk.com"; // URL to your JSON file
  const url = "./fetch-response.json"; // Local file path

  try {
    const data = await readJsonFile(url);
    if (data) {
      const markdownString = generateMarkdown(data);
      const fileName = "my-favourites-internet-archive.md";

      await writeMarkdownToFile(markdownString, fileName);
    } else {
      console.log("Failed to parse JSON data.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
