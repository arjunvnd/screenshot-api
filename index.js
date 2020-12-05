const express = require("express");
const app = express();
const puppeteer = require("puppeteer");
const port=process.env.PORT||3001
const path = require('path')

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/screenshot", async (req, res) => {
  const { weburi } = req.query;
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(weburi);
    const image = await page.screenshot({ fullPage: true });
    await browser.close();
    res.set("Content-Type", "image/png");
    res.send(image);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("App listning on port", port);
});
