import {useState} from "react"
import {useHistory} from "react-router-dom"
import "./SignUp.css"
import {signUp} from "../../services/user"
import Layout from "../../components/Layout/Layout"



export default function SignUp() {
    const [input, setInput] = useState({username: "", email: "", password: ""})
    const history = useHistory();
const {setUser} = props

    const handleSubmit = async (e) => {
        const user = await signUp(input);
        setUser(user);
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
        <Layout>
            <div className="logo">
                <h1>Forumtopia</h1>
            </div>
            <div className = "back">
            </div>
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
        </Layout>
    )
}