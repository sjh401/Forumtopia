import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function SignIn(props) {
    const [ input, setInput ] = useState({ email: "" , password: "" })

    const { setUser } = props;
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            <div>
                Sign In
                <form onSubmit={handleSubmit}>
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
    )
}
