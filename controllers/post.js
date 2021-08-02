import Post from "../models/post.js"

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body)
    post.userId = req.userId
    await post.save()
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.send(posts)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const updatePost = async (req, res) => {
  try {
    const {id} = req.params
    const post = await Post.findByIdAndUpdate(id)
    res.send(post)
  } catch (e) {
    res.status(500).json({erroe: e.message})
  }
}

export const deletePost = async (req, res) => {
  
}