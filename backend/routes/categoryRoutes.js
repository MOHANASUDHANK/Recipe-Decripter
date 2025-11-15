import express from "express" 
import { addCategory, deleteCategory, getAllCategories } from "../controllers/categoryController.js";

const router  =express.Router();

router.get("/",getAllCategories);
router.put("/",addCategory);
router.delete("/:id",deleteCategory);

export default router;