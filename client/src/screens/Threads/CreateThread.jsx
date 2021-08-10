import { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import { createThread } from "../../services/thread";
import { getCategories } from '../../services/category';
import "./CreateThread.css"




export default function CreateThread(props) {
  const [input, setInput] = useState({
    title: "",
    body: "",
    imgUrl: "",
    categoryId: ""
  });
  
  
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
      const fetchCategories = async () => {
          const get = await getCategories();
          setCategories(get);
      }
      fetchCategories();
  },[])

  const [isCreated, setCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createThread(input.categoryId, input);
    setCreated({ created })
  };

  if (isCreated) {
    return <Redirect to={`/`} />
  }
  
  return (
    <Layout user={props.user}>
      {props.user &&
        <>
          <h3 className="create-edit-header">
            Create Thread
          </h3>
          <form className="create-form" 
          onSubmit={handleSubmit} >
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
            <select className="create-thread-data-list" id="categoryId" name="categoryId" onChange={handleChange} >
                <option value="">Select from List</option>
                {categories.map(category => (
                  <option key={category._id} className="create-thread-data-option" value={category._id} >{category.title}</option>
                ))}
            </select>
            <br />
            <button type='submit' className='submit-button'>Submit</button>
          </form>
        </>
      }
    </Layout>
  )
}
