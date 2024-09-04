export const dynamic = 'force-dynamic'
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const API_URL = "https://game-truth-or-dare.onrender.com";

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
