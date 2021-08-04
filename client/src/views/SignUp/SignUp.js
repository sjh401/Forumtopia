import { useState } from 'react'
import {signUp} from "../../services/user"

export default function SignUp(props) {
  const [input, setInput] = useState({ email: "", username: "", password: "" })
  


  return (
    <div>
      <form>
        <label>Email:</label>
        <input
          id="email"
          type="email"
          value={input.email}
        />
        <label>Username:</label>
        <input
          id="username"
          type="text"
          value={input.username}
        />
        <label>Password:</label>
        <input
          id="password"
          type="password"
          value={input.password}
        />
      </form>
    </div>
  )
}
