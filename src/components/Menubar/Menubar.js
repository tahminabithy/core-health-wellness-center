import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Menubar.css'
const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="info" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Health & Wellness</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className='change'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/doctordetail">Doctor Details</Nav.Link>
                        <Navbar.Text>
                            <span >{user?.displayName}</span>
                            {
                                user.email ? <Link to='/login'> <button onClick={logOut} className='btn btn-light ms-3'>Log out</button></Link> : <Link to="/login"><button className='btn btn-danger ms-3'>Login</button></Link>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;