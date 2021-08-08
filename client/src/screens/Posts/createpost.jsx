import { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { getThread } from '../../services/thread';
import { createPost } from '../../services/post';
import "../../App.css"



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
    <div className="create-post-div">
      <div className="create-post-title">Post as {props.user.username}</div>
      <form onSubmit={handleSubmit} className="create-post-form">
        <br />
        {/* <label className="label-one">Body:</label> */}
        <textarea className="create-post-text-area" placeholder="post" id="body" value={input.body} onChange={handleChange} />
        <br />
        {/* <label className="label-two">Image:</label> */}
        <input  className="create-post-image" placeholder="image" id="imgUrl" value={input.imgUrl} onChange={handleChange} />
        <br />
        {/* <button ref={refresh}>Submit</button> */}
        <button className="create-post-button">Submit</button>
      </form>
    </div>
  )
}