import Thread from "../models/thread.js"
import Category from "../models/category.js"

export const createThread = async (req, res) => {
  try {
    const thread = new Thread(req.body)
    thread.userId = req.user

    const { id } = req.params
    const category = await Category.findById(id)
    thread.categoryId = category._id

    const user = await User.findById(req.user)
    thread.userId = user._id

    await thread.save()

    user.threadId.push(post._id)
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
    const threads = await Thread.find(req.body).populate('userId')
    res.send(threads)
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const getThread = async (req, res) => {
  try {
<<<<<<< HEAD
    const {id} = req.params
=======
    const { id } = req.params
>>>>>>> 74dd7d64ee9588d060eeed53b04dec01f059436b
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
<<<<<<< HEAD
    const {id} = req.params
=======
    const { id } = req.params
>>>>>>> 74dd7d64ee9588d060eeed53b04dec01f059436b
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