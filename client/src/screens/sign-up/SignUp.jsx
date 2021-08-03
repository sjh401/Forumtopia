import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';

export default function SignUp(props) {
    const [ input, setInput ] = useState({ username: "", email: "" , password: "" })
    const { setUser } = props;
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const user = await signUp(input)
        // console.log(user);
        // setUser(user)
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
        // <Layout>
            <div>
                Sign Up
                <form onSubmit={handleSubmit}>
                <label>Username</label>
                    <input 
                    id="username" 
                    value={input.username} 
                    type="password" 
                    onChange={handleInput} />
                    <br />
                    <label>Email</label>
                    <input 
                    id="email" 
                    value={input.email} 
                    type="email" 
                    onChange={handleInput} />
                    <br />
                    <label>Password</label>
                    <input 
                    id="password" 
                    value={input.password} 
                    type="password" 
                    onChange={handleInput} />
                    <br />
                    <button>Sign In</button>
                </form>
            </div>
        // </Layout>
    )
}