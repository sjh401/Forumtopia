import {useState} from "react"
import {Redirect, useHistory} from "react-router-dom"
import "./SignUp.css"

export default function SignUp() {
    const [input, setInput] = useState({username: "", email: "", password: ""})
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push("/")
    };

    const handleInput = (e) => {
        const {id, value} = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }));
    }
    return (
        <div>
                <form className="move" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <br/>
                    <input id="username" 
                    type="text" 
                    value={input.username}
                    onChange={handleInput}
                    /> 
                    <br/>
                    <label>Email</label>
                    <br/>
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
                    <br/>
                    <button>Sign Up</button>
                </form>
        </div>
    )
}
