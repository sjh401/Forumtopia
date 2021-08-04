import { useState } from 'react';
import { useHistory } from "react-router-dom";




export default function CreatePost(props) {
  
  const [input, setInput] = useState({ body: "", imgUrl: "" });
  const history = useHistory();
  
  const handleChange = (e) => {
    const { id, value } = e.target
    
    setInput(prevInput => ({
      ...prevInput,
      [id]: value
    }))
  }

  const handleSubmit= async (e) =>{
    e.preventDefault(id, input);
    await createPost(input);
    history.pushState("/");
  };

  return (
    <div>
      Create a Post 
      <form onsubmit={handleSubmit} className="form-horizontal">
        <label>body</label>
        <br />
        <input id="body" value={input.body} onChnage={handleChange} />
        <br />
        <label>Image:</label>
        <input id="imgUrl" value={input.imgUrl} onChange={handleChange} />
        <button>Submit</button>

      </form>
    </div>
  )
}
