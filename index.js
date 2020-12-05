const express = require("express");
const app = express();
const cors = require("cors");

const puppeteer = require("puppeteer");
const port = process.env.PORT || 3001;
const path = require("path");
app.use(cors());
app.options('*', cors());

app.use(express.static(path.join(__dirname, "build")));

app.get("/api/screenshot", async (req, res) => {

  const { weburi } = req.query;
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto(weburi);
    const image = await page.screenshot({ fullPage: true });
    await browser.close();
    res.set("Content-Type", "image/png");
    res.status(200)
    res.send(image);
  } catch (error) {
    console.log(error);
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log("App listning on port", port);
});
