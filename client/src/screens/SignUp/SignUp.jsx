import { useState } from "react"
import { useHistory } from "react-router"
import { signUp } from "../../services/user"
import Layout from "../../components/Layout/Layout"



export default function SignUp(props) {
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signUp(input);
    console.log(user);
    setUser(user);
    history.push("/");
  }

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value
    }))
  };
  return (
    <Layout>
      <div className="logo">
        <h1>Forumtopia</h1>
      </div>
      <div className="back">
      </div>
      <form className="move" onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input id="username"
          type="text"
          value={input.username}
          onChange={handleInput}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
        />
        <label>Password</label>
        <input
          id="password"
          type="password"
          value={input.password}
          onChange={handleInput}
        />
        <br />
        <button>Sign Up</button>
      </form>
    </Layout>
  )
}