//import React from 'react'
import {SignIn} from "../../services/sign-in"
import {useState} from "react"
import Layout from "../../components/Layout/Layout"
import {useHistory} from "react-router-dom"

export default function SignIn() {
    const [input, setInput] = useState({username: "", email: "", password: ""})
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await logIn(input)
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
