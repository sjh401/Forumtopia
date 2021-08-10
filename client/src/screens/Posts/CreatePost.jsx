import { useState } from 'react';
import { useParams } from "react-router-dom";
import { createPost } from '../../services/post';
import "../../App.css"



export default function CreatePost(props) {
  const [input, setInput] = useState({ body: "", imgUrl: "" });
  const { id } = useParams();


  const handleChange = (e) => {
    const { id, value } = e.target
    setInput(prevInput => ({
      ...prevInput,
      [id]: value
    }))
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(id, input);
    window.location.reload(false);
  };

  return (
    <div className="create-post-div">
      <div className="create-post-title">Post as {props.user?.username}</div>
      <form onSubmit={handleSubmit} className="create-post-form">
        <br />
        <textarea className="create-post-text-area" placeholder="post" id="body" value={input.body} onChange={handleChange} />
        <br />
        <input  className="create-post-image" placeholder="image" id="imgUrl" value={input.imgUrl} onChange={handleChange} />
        <br />
        <button className="edit-thread-post-link" style={{color: "black", opacity:"100%"}}>Submit</button>
      </form>
    </div>
  )
}