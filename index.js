const express = require("express");
const app = express();
const cors = require("cors");

const puppeteer = require("puppeteer");
const port = process.env.PORT || 3001;
const path = require("path");
app.use(cors());
app.options("*", cors());

app.use(express.static(path.join(__dirname, "build")));

app.get("/api/screenshot", async (req, res) => {
  const { weburi, imagetype, width, height } = req.query;

  try {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.waitFor(500);
    await page.setDefaultNavigationTimeout(0);

    await page.goto(weburi);
    if (width && height) await page.setViewport({width:Number(width),height:Number(height)});
    console.log('Taking the screenshot ')
    const image = await page.screenshot({ fullPage: true, type: imagetype });
    await browser.close();
    res.set("Content-Type", "image/png");
    res.status(200);
    res.send(image);
  } catch (error) {
    console.log("Error in screenshots api",error);
    res.status(400).send(error);
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log("App listning on port", port);
});
