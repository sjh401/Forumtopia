import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getThread, updateThread } from '../../services/thread';

export default function EditThread(props) {
  const [input, setInput] = useState({ title: "", body: "", imgUrl: "", categoryId: "" })
  const [thread, setThread] = useState({});
  const [isUpdated, setIsUpdated] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchThread = async () => {
      const thread = await getThread(id);
      console.log(thread)
      setThread(thread);
    }
    fetchThread();
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setThread(setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    })));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateThread(id, thread);
    setIsUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/thread/${id}`} />
  }
  return (
    <Layout user={props.user}>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          id="title"
          placeholder={thread?.title}
          value={input.title}
          type="text"
          onChange={handleChange} />
        <br />
        <label>Body</label>
        <input
          id="body"
          placeholder={thread?.body}
          value={input.body}
          type="text"
          style={{ width: "150px", height: "250px" }}
          onChange={handleChange} />
        <br />
        <label>Image</label>
        <input
          id="imgUrl"
          placeholder={thread?.imgUrl}
          value={input.imgUrl}
          type="text"
          onChange={handleChange} />
        <br />
        <label>Category</label>
        <input
          id="categoryId"
          placeholder={thread?.imgUrl}
          value={input.imgUrl}
          type="text"
          onChange={handleChange} />
        <br />
        <button>Update Thread</button>
      </form>
    </Layout>
  )
}



