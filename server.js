"use strict";

const express = require("express");
const app = express();
const puppeteer = require("puppeteer");
const fs = require("fs");
const ejs = require("ejs");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// Endpoint
app.get("/(:base64).jpg", async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    page.setViewport({ width: 1200, height: 600, deviceScaleFactor: 1 });

    const data = Buffer.from(req.params.base64, "base64")
      .toString("utf8")
      .split("|");
    const html = ejs.render(fs.readFileSync("./template.html", "utf8"), {
      title: data[0],
      description: data[1],
    });
    await page.setContent(html);
    const image = await page.screenshot({
      waitUntil: "networkidle2",
      type: "jpeg",
      quality: 100,
    });
    await browser.close();

    res.set("Content-Type", "image/jpeg");
    res.send(image);
  } catch (error) {
    console.log(error);
  }
});

// Server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
