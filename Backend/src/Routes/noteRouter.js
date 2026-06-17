import express from "express";
import { getNotes,createNote, updateNote, deleteNote, getNotebyId } from "../controllers/noteController.js";

const router = express.Router();

router.get("/",getNotes);

router.get("/:id",getNotebyId);

router.post("/",createNote);

router.put("/:id",updateNote);

router.delete("/:id",deleteNote);

export default router;