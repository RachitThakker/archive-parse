import axios from "axios";
import fs from "fs";
import path from "path";

async function readJsonFile(url) {
  try {
    let jsonData;
    if (url.startsWith("http")) {
      // If the URL is remote
      const response = await axios.get(url);
      jsonData = response.data;
    } else {
      // If the URL is a local file path
      const filePath = path.resolve(url);
      const jsonString = fs.readFileSync(filePath, "utf8");
      jsonData = JSON.parse(jsonString);
    }

    return jsonData;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
}

export default readJsonFile;
