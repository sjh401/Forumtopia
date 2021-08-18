import { useState } from 'react'
import { signIn } from "../../services/user"
import Layout from "../../components/Layout/Layout"
import { Redirect } from 'react-router-dom';

export default function SignIn(props) {
  const [input, setInput] = useState({ username: "", password: "" })
  const { setUser } = props;
  const [ isUpdated, setIsUpdated ] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signIn(input)
    setUser(user)
    setIsUpdated(user)
  }

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  if(isUpdated) {
    return <Redirect to={`/`}/>
}

  return (
    <Layout>
      <div className="logo">
        <h1 className="logo-text">Forumtopia</h1>
      </div>
      <div className = "back">
      </div>
      <div>
        Sign In
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          id="username"
          value={input.username}
          type="text"
          onChange={handleInput} />
        <br />
        <label>Password:</label>
        <input
          id="password"
          value={input.password}
          type="password"
          onChange={handleInput} />
        <br />
        <button>Sign In</button>
      </form>
    </Layout>
  )
}
