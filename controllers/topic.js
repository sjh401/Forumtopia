import Topic from "../models/topic.js"

export const createTopic = async (req, res) => {
  try {
    const topic = new Topic(req.body)
    // topic.threads = req.thread
    await topic.save()
    res.status(201).json(topic)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find({}).populate('threadId')
    res.send(topics)
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const getTopic = async (req, res) => {
  try {
    const {id} = req.params
    const topic = await Topic.findById(id).populate('threadId')
    if (Topic) {
      res.json(topic)
    } else {
      res.status(404).json({error: "Topic not found"})
    }
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const updateTopic = async (req, res) => {
  try {
    const {id} = req.params
    const { body } = req
    const topic = await Topic.findByIdAndUpdate(id, body, {new: true})
    res.send(topic)
  } catch (e) {
    res.status(424).json({error: e.message})
  }
}


// I think this is a really bad idea
export const deleteTopic = async (req, res) => {
  try {
    const { id } = req.params
    const topic = await Topic.findByIdAndDelete(id)
    res.send(topic)

  } catch (e) {
    res.status(404).json({error: e.message})
  }
}
