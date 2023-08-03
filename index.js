import express from "express";
const app = express();

// Import the API router
import apiRouter from "./server/api.js";

// API router
app.use("/api", apiRouter);

// Other middleware and routes...
import bodyParser from "body-parser";

// Parse incoming JSON data
app.use(bodyParser.json());
// Parse incoming URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Starting server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
