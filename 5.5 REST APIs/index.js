import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;
const API_URL = process.env.API_URL;

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

const yourBearerToken = process.env.BEARER_TOKEN;
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  if (!searchId || searchId.trim() === "") {
    return res.render("index.ejs", {
      content: "Error: ID is required.",
    });
  }
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {

  try {
    const response = await axios.post(API_URL + "/secrets", req.body, config);
    res.render("index.ejs", {content : JSON.stringify(response.data)});
  } catch (error) {
    res.render("index.ejs", {content: error});
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const response = await axios.put(API_URL + "/secrets/" + searchId, req.body, config);
    res.render("index.ejs", {content : JSON.stringify(response.data)});
  } catch (error) {
    res.render("index.ejs", {content: error});
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const response = await axios.patch(API_URL + "/secrets/" + searchId, req.body, config);
    res.render("index.ejs", {content : JSON.stringify(response.data)});
  } catch (error) {
    res.render("index.ejs", {content: error});
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
