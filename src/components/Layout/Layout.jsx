import Nav from 'react-bootstrap/Nav';
import { Collapse } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import photoMe from '../../img/myPhoto.jpg';
// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

  return (
    <main className='d-flex flex-column container'>
        <header className='d-flex'>
            <div role='button' onClick={() => setOpen(!open)} aria-expanded={open}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <Collapse in={open}>
                <div>
                    <Nav as='ul' className='d-flex flex-column'>
                        <Nav.Item as='li'>
                            <Nav.Link className='px-0' onClick={()=> navigate('/')}>Список постов</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Nav.Link className='px-0' onClick={()=> navigate('/about-me')}>Обо мне</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as='li' className='d-flex'>
                            <h2>Алексей Тихонов</h2>
                            <Image style={{width:'50px', margin:'0 0 0 10px'}} rounded src={photoMe}></Image>
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <p>zukko961@gmail.com</p>
                        </Nav.Item>
                    </Nav>
                </div>
            </Collapse>
        </header>
        <section className='d-flex gap-3 justify-content-center flex-wrap'>
            {children}    
        </section>
    </main>
  )
};

export default Layout;
