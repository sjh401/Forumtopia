import Post from "../models/post.js"
import User from "../models/user.js"
import Thread from "../models/thread.js"


export const createPost = async (req, res) => {
  try {

    const post = new Post(req.body)
    post.userId = req.user

    const { pid } = req.params
    const thread = await Thread.findById(pid)

    const user = await User.findById(req.user)
    post.userId = user._id
    
    await post.save()
    user.posts.push(post._id)
    thread.posts.push(post._id)
    post.threadId = thread._id
    
    await user.save()
    await thread.save()
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const getPosts = async (req, res) => {
  try {
    const { pid } = req.params
    const thread = await Thread.findById(pid)
    const posts = await Post.find({threadId: thread._id}).populate('threadId').populate("userId")
    res.json(posts)
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const getPost = async (req, res) => {
  try {
    const {pid} = req.params
    const post = await Post.findById(pid).populate("userId")
    if (post) {
      res.json(post)
    } else {
      res.status(404).json({error: "Post not found"})
    }
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const updatePost = async (req, res) => {
  try {
    const { pid } = req.params
    const {body} = req
    const post = await Post.findByIdAndUpdate(pid, body, {new: true})
    res.send(post)
  } catch (e) {
    res.status(424).json({error: e.message})
  }
}

export const deletePost = async (req, res) => {
  try {
    const { pid } = req.params
    const post = await Post.findByIdAndDelete(pid)
    res.send(post)

  } catch (e) {
    res.status(404).json({error: e.message})
  }
}