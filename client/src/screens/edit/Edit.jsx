import React, { useState }from 'react';
import { useHistory } from 'react-router-dom';


export default function Edit(props) {
  const [input, setInput] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push("/")
  }

    return (
        <div>
        Edit Post
        <form onSubmit={handleSubmit}>
        <label>Title</label>
            <input id="title" value={input.title} onChange={handleChange} />
            <br />
            <label>Thread Here!</label>
            <input id="body" value={input.body} onChange={handleChange} />
            <br />
            <label>Image</label>
            <input id="imgURL" value={input.imgUrl} onChange={handleChange} />
          <br />
          <button>Update Thread</button>
        </form>
        </div>
    )
}
