import express from "express";
import cors from 'cors'
import posts from "./routes/posts.mjs";
import routes from "./routes/routes.mjs"

// load env
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.port || 5050;
const app = express();

app.use(express.json());
app.use(cors());

// load routes
app.use("/posts", posts);
app.use("", routes);


app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured.")
  })
  

  // start express server
app.listen(PORT, () => console.log("app is listening on port " + PORT))