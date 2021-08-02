import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';

export default function SignIn(props) {
    const [ input, setInput ] = useState({ email: "" , password: "" })

    const { setUser } = props;
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const user = await signIn(input)
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
            Sign In

        </Layout>
    )
}
