const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const middlewares = require("./middlewares");
const routes = require("./routes/index.js");

const app = express();

app.enable("trust proxy");

app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦟",
  });
});

app.use("/api", routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
