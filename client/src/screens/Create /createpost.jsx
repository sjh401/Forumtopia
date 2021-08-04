import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Layout from '../../components/Layout/Layout';




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
    e.preventDefault();
    await CreatePost(input);
    history.pushState("/");
  };

  return (
    <Layout>
      Create a Post 
      <form onsubmit={handleSubmit} className="form-horizontal">
        <label>Body:</label>
        <br />
        <input id="body" value={input.body} onChnage={handleChange} />
        <br />
        <label>Image:</label>
        <input id="imgUrl" value={input.imgUrl} onChange={handleChange} />
        <br />
        <button>Submit</button>

      </form>
        
      </Layout>
  )
}
