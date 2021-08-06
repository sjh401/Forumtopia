import Category from "../models/category.js"

export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body)
    // category.threads = req.thread
    await category.save()
    res.status(201).json(category)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).populate('threadId')
    res.send(categories)
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const getCategory = async (req, res) => {
  try {
    const {id} = req.params
    const category = await Category.findById(id).populate('threadId')
    if (category) {
      res.json(category)
    } else {
      res.status(404).json({error: "Category not found"})
    }
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const updateCategory = async (req, res) => {
  try {
    const {id} = req.params
    const { body } = req
    const category = await Category.findByIdAndUpdate(id, body, {new: true})
    res.send(category)
  } catch (e) {
    res.status(424).json({error: e.message})
  }
}


// I think this is a really bad idea
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Category.findByIdAndDelete(id)
    res.send(category)

  } catch (e) {
    res.status(404).json({error: e.message})
  }
}