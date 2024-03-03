function generateMarkdown(jsonData) {
  if (!Array.isArray(jsonData)) {
    throw new Error(
      "Invalid JSON data format. Please provide an array of objects"
    );
  }

  const listItems = jsonData.map((item) => {
    if (
      !item.hasOwnProperty("fields") ||
      !item.fields.hasOwnProperty("identifier") ||
      !item.fields.hasOwnProperty("title")
    ) {
      throw new Error(
        "Invalid JSON data format. Expected fields: identifier, title"
      );
    }

    const identifier = item.fields.identifier;
    const title = item.fields.title;
    const url = `https://archive.org/details/${identifier}`;
    return `1. [${title}](${url})`;
  });

  return listItems.join("\n");
}

export default generateMarkdown;
