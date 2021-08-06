import { useState } from 'react';
import { Redirect } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import { createThread } from "../../services/thread";




export default function CreateThread(props)  {
  const [input, setInput] = useState({
    title: "",
    body: "",
    imgUrl: ""
  });

  const [isCreated, setCreated] =useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  const handleSubmit= async (e) =>{
    e.preventDefault();
    const created = await createThread(input);
    setCreated ({ created })
  };

  if (isCreated) {
    return <Redirect to={`/`} />
  }

  return (
    <Layout user={props.user}>
      Create Thread 
        <form className="create-form" onSubmit={handleSubmit} >
          <br />
          <input 
            className='input-title'
            placeholder='Title'
            name='title'
            value={input.title}
            required 
            onChange={handleChange}
          />
          <br />
          
          <textarea
            className='textarea-body'
            placeholder='Body'
            name='body'
            rows={10}
            value={input.body}
            required
            onChange={handleChange}
          />
          <br />
          <input 
            className="input-image-link"
            placeholder='Image Link'
            name='imgUrl'
            value={input.imgUrl}
            required
            onChange={handleChange}
          />
          <br />
          <button type ='submit' className='submit-button'>Submit</button>

        </form>
      </Layout>
  )
}
