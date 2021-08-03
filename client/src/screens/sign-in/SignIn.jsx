import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

export default function SignIn(props) {
    const [ input, setInput ] = useState({ email: "" , password: "" })

    const { setUser } = props;
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
         //const user = await signIn(input)
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
         <Layout>
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
                    {/* <label></label>
                    <input 
                    id="" 
                    value={input.fdfda} 
                    type="" 
                    onChange={handleInput} />
                    <br /> */}
                    <button>Sign In</button>
                </form>
            </div>
         </Layout>
    )
}
