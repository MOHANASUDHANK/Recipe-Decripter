import Category from "../models/category.js";

export const getAllCategories = async (req,res) => { 
        try{
                const category = await Category.find();
                res.status(200).json(category);
        }
        catch(err){
                res.status(500).json({message : err.message})
        }
}

export const addCategory = async (req,res) =>{
        try{
                const data = req.body;

                const category = new Category(data);
                category.save();
                res.status(200).json(category);
        }
        catch(err){
                res.status(500).json({message : err.message})
        }
}

export const deleteCategory = async (req,res) => {
        try{
                const {id} = req.params;
                const category = await Category.findByIdAndDelete(id);
                res.status(200).json(category);
        }
        catch(err){
                res.status(500).json({message : err.message})
        }
}