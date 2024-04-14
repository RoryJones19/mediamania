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

// route to get all books
router.get("/books", async (req, res) => {
    let collection = await db.collection("Books");
    let allBooks = await collection.find().toArray();
    console.log(allBooks);
    res.send(allBooks).status(204);
});

// route to add new book
router.post("/new-book", async (req, res) => {
    let newBook = req.body;
    newBook.date = new Date();
    let collection = await db.collection("Books");
    let result = collection.insertOne(newBook);
    res.send(result).status(204);
});

export default router