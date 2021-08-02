import Thread from "../models/thread.js"

export const createThread = async (res, req) => {
  try {const thread = new Thread(req.body)
  thread.userId = req.userId
  await thread.save()
  res.status(201).json(thread)
} catch (e) {
  res.status(500).json({error: e.message})
}
}

export const getThreads = async (req, res) => {
  try {
    const thread = await Thread.find({})
    res.send(thread)
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const getThread = async (req, res) => {
  try {
    const {id} = req.params
    const thread = await Thread.findById(id)
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
    const {id} = req.params
    const thread = await Thread.findByIdAndUpdate(id)
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