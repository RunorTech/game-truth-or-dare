import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const API_URL = "https://runor9.postman.co/workspace/78ac7db0-f739-4f76-9e9f-5fa111a4e346/api/5f0ca236-04a2-40f6-9e81-2cdb57b45aad/collection/32950013-acd9c1ae-379b-4210-8721-9a61907badf8?action=share&source=copy-link&creator=32950013&branch=main";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/your-task", (req, res) => {
  res.redirect("/");
});

app.post("/your-task", async (req, res) => {
  const Truth = req.body["Truth"];
  const Dare = req.body["Dare"];

  if (Truth) {
    try {
      const response = await axios.get(API_URL + "/truth/random");
      const result = response.data;
      res.render("index.ejs", { question: result.question, task: Truth });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.redirect("/");
    }
  } else if (Dare) {
    try {
      const response = await axios.get(API_URL + "/dare/random");
      const result = response.data;
      res.render("index.ejs", { dare: result.dare, task: Dare });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.redirect("/");
    }
  }
});

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});
