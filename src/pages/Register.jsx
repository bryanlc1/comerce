import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Button, Form, Stack } from "react-bootstrap";

import { registerUser } from "../services/User";
import useComerce from "../hooks/useComerce";
import '../styles/Login.css';

const Register = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [userName, setUserName] = useState();

    const {user,setUser}= useComerce();

    const sendUser = async () => {
        const user = {
            username:userName,
            email:email,
            password:password
        }
        
         const userRegister = await registerUser(user);
         setUser(userRegister)
         if(userRegister?.jwt) navigate('/')
    }

    const handelsubmit = event => {
        event.preventDefault();
        sendUser();
    }

    console.log(user)

    return (
        <section className="contLogin">
            <div className="login">
                <h2>Registrate</h2>
                <Form onSubmit={handelsubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Usuario" onChange={(e) => setUserName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Stack gap={2} className="contButonsLogin">
                        <button className="btonlogin">
                            Registrate
                        </button>
                    </Stack>
                </Form>
            </div>

        </section>
    )
}

export default Register;