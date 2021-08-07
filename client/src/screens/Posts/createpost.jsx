import { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { getThread } from '../../services/thread';
import { createPost } from '../../services/post';


export default function CreatePost(props) {
  const [thread, setThread] = useState([])
  const [input, setInput] = useState({ body: "", imgUrl: "" });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchThread = async () => {
      const thread = await getThread(id);
      setThread(thread);
    }
    fetchThread();
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target

    setInput(prevInput => ({
      ...prevInput,
      [id]: value
    }))
  }
  console.log(props.user)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(id, input);
    history.push(`/threads/${thread._id}`);
  };

  return (
    <>
      Create a Post
      <form onSubmit={handleSubmit} className="form-horizontal">
        <br />
        <label>Body:</label>
        <input id="body" value={input.body} onChange={handleChange} />
        <br />
        <label>Image:</label>
        <input id="imgUrl" value={input.imgUrl} onChange={handleChange} />
        <br />
        {/* <button ref={refresh}>Submit</button> */}
        <button>Submit</button>
      </form>
    </>
  )
}