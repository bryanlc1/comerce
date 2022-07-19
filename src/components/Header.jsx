import { useNavigate } from "react-router-dom"
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useState } from 'react';

import useComerce from "../hooks/useComerce";

import {FaCartPlus} from "react-icons/fa";
import '../styles/Header.css';
const Header = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    const { user, setUser,cart} = useComerce();

    const logout = () => {
        setUser({})
    }

    const totalItems = cart.map(item=>item.amount).reduce((prev,current)=>prev+current,0)
    return (
        <>
            <Navbar expanded={expanded ? 'false' : null} onToggle={setExpanded} bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate('/')}>
                        <img src="src/assets/codealo.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                        Codealo-comerce
                    </Navbar.Brand>
                    <Navbar.Brand className="shoppingCart" onClick={() => {navigate('/cart') }}>
                                    <FaCartPlus />
                                    {cart.length !==0 ? <span className="itemsCart">{totalItems}</span>:null}
                    </Navbar.Brand>
                    <Navbar.Toggle expanded={expanded ? 'false' : null} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto"
                            style={{ maxHeight: '100px' }}
                        >
                            <Nav.Link onClick={() => { setExpanded(false); navigate('/') }} >Inicio</Nav.Link>
                            <Nav.Link onClick={() => { setExpanded(false); navigate('/products') }} >Productos</Nav.Link>
                        </Nav>
                        
                        {user.jwt ?
                            <Nav >
                                <Nav.Link className="btonLogin" onClick={() =>{logout();setExpanded(false)}}>Logout</Nav.Link>
                            </Nav>
                            :
                            <>
                            <Nav>
                                <Nav.Link className="btonLogin" onClick={() => { setExpanded(false); navigate('/login') }}>Login</Nav.Link>
                            </Nav>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header;