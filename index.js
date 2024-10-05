const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

const folderPath = path.join(__dirname, "text-files");

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

app.get("/create-file", (req, res) => {
  const date = new Date();
  const fileName = `${date.toISOString().replace(/:/g, "-")}.txt`;
  const filePath = path.join(folderPath, fileName);

  fs.writeFile(filePath, `Timestamp: ${date.getTime()}`, (err) => {
    if (err) {
      return res.status(500).send("Failed to create file");
    }
    res.status(200).send(`File created: ${fileName}`);
  });
});

app.get("/list-files", (req, res) => {
  console.log("List files route hit");
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Directory read error:", err);
      return res.status(500).send("Failed to retrieve files");
    }

    const textFiles = files.filter((file) => path.extname(file) === ".txt");
    res.status(200).json({ files: textFiles });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
