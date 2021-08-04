import { useState } from 'react'
import { signIn } from "../../services/user"
import Layout from "../../components/Layout/Layout"
import { useHistory } from 'react-router-dom';

export default function SignIn(props) {
  const [input, setInput] = useState({ username: "", password: "" })
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signIn(input)
    setUser(user)
    history.push("/");
  }

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  return (
    <Layout>
      Sign In
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
