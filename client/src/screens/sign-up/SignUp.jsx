//import React from 'react'
import {SignUp} from "../../services/sign-up"
import {useState} from "react"
import Layout from "../../components/Layout/Layout"
import {useHistory} from "react-router-dom"

export default function SignUp() {
    const [input, setInput] = useState({username: "", email: "", password: ""})
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signUp(input)
        setUser(user);
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
            <Layout>
                <form onSubmit={handleSubmit}>
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
        </div>
    )
}
