import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Layout from '../../components/Layout/Layout';




export default function CreateThread(props) {
  
  const [input, setInput] = useState({ title: "", body: "", imgUrl: "" });
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
    await CreateThread(input);
    history.pushState("/");
  };

  return (
    <Layout>
     Create Thread 
      <form onsubmit={handleSubmit} className="form-horizontal">
        <label>Title: </label>
        <br />
        <input id="title" value={input.title} onChnage={handleChange} />
        <br />
        <label>Body: </label>
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
