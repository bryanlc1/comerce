import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Form, Stack } from "react-bootstrap";

import { loginUser } from "../services/User";
import useComerce from "../hooks/useComerce";
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const{user,setUser} = useComerce();

    const sendUser = async () => {
        const user = {
            identifier:email,
            password:password
        }        
    
         const userLoged = await loginUser(user);
         console.log(userLoged);
         setUser(userLoged);
         if(userLoged?.jwt) navigate('/')
         if(userLoged?.statusCode===400) toast.error(userLoged?.message[0].messages[0].message)
    }

    const handelsubmit = event => {
        event.preventDefault();
        sendUser();
    }
    

    return (
       <>
        <ToastContainer autoClose={1500} />
        <section className="contLogin">
            <div className="login">
                <h2>Incia Sesion</h2>
                <Form onSubmit={handelsubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control className="inputForm" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control className="inputForm" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Stack gap={2} className="contButonsLogin">
                        <button type="submit" className="btonlogin">
                            Iniciar sesion
                        </button>
                        <button className="btonlogin" onClick={() => navigate("/register")}>
                            Registrate
                        </button>
                    </Stack>
                </Form>
            </div>

        </section>
       </>
    )
}

export default Login;