import { useState } from 'react';
import { Redirect } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import { createPost } from '../../services/post';
import { useParams } from 'react-router';




export default function PostCreate(props)  {
  const [input, setInput] = useState({
    body: "",
    imgUrl: ""
  })
  const { id } = useParams();
  
  
  const [isCreated, setCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }))
  }
  const handleSubmit= async (e) =>{
    e.preventDefault();
    const created = await createPost(id, input);
    setCreated ({ created })
  };

  if (isCreated) {
    return <Redirect to={`/post`} />
  }

  return (
    <Layout>
      Create a Post 
      <form className="create-form" onSubmit={handleSubmit}>
       <br />
        <textarea
          className='textarea-body'
          rows={10}
          placeholder='body'
          value={input.body}
          name='body'
          required
          onChange={handleChange}
          />
        <br />
        <label>Image:</label>
        <input 
          className="input-image-link"
          placeholder='Image Link'
          value={input.imgUrl}
          name='imgUrl'
          required
          onChange={handleChange}
        />
        <br />
        <button type ='submit' className='submit-button'>Submit</button>

      </form>
        
      </Layout>
  )
}