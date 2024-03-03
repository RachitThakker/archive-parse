import fs from "fs/promises";

async function writeMarkdownToFile(markdownData, filename) {
  try {
    await fs.writeFile(filename, markdownData);
    console.log(`Successfully wrote data to ${filename}`);
  } catch (error) {
    console.error(error.message);
  }
}

export default writeMarkdownToFile;
