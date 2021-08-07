import Thread from "../models/thread.js"
import Category from "../models/category.js"
import User from "../models/user.js"

export const createThread = async (req, res) => {
  try {
    const thread = new Thread(req.body)
    thread.userId = req.user
    console.log("req: ", req)
    

    const { id } = req.params
    const category = await Category.findById(id)
    console.log("CAT ID: ", category)

    const user = await User.findById(req.user)
    thread.userId = user._id
    console.log("USER ID: ", user)

    await thread.save()
    thread.categoryId = category._id
    category.threadId.push(thread._id)
    
    await user.save()
    await category.save()
    res.status(201).json(thread)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const getThreads = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Category.findById(id)
    const threads = await Thread.find({categoryId: category._id}).populate('categoryId')
    console.log("BODY", req.body)
    console.log("CATEGORY", category)
    res.json(threads)
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const getThread = async (req, res) => {
  try {
    const { id } = req.params
    const thread = await Thread.findById(id).populate('posts').populate('userId')
    if (thread) {
      res.json(thread)
    } else {
      res.status(404).json({error: "Thread not found"})
    }
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const updateThread = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const thread = await Thread.findByIdAndUpdate(id, body, {new: true})
    res.send(thread)
  } catch (e) {
    res.status(424).json({error: e.message})
  }
}

export const deleteThread = async (req, res) => {
  try {
    const { id } = req.params
    const thread = await Thread.findByIdAndDelete(id)
    res.send(thread)

  } catch (e) {
    res.status(404).json({error: e.message})
  }
}