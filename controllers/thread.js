import Thread from "../models/thread.js"
import Topic from "../models/topic.js"
import User from "../models/user.js"

export const createThread = async (req, res) => {
  try {
    const thread = new Thread(req.body)
    thread.userId = req.user
  
    const { id } = req.params
    const topic = await Topic.findById(id)
  
    const user = await User.findById(req.user)
    thread.userId = user._id

    await thread.save()
    topic.threadId.push(thread._id)
    thread.topicId = topic._id
    
    await user.save()
    await topic.save()
    res.status(201).json(thread)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const getThreads = async (req, res) => {
  try {
    const { id } = req.params
    const topic = await Topic.findById(id)
    const threads = await Thread.find({topicId: topic._id}).populate('topicId').populate('userId').populate('posts')
    res.json(threads)
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const getGeneralThreads = async (req, res) => {
  try {

    const threads = await Thread.find({}).populate('userId')
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