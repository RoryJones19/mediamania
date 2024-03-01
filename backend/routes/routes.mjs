import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import book from "../models/book.js"

const router = express.Router();

router.get("/", async (req, res) => {
    let results  = {
      test: "ayo",
      yay: "haha"
    }
  
    res.send(results).status(200);
  });

router.post("/new-book", async (req, res) => {
    
});

export default router