import React from 'react'
import {Button} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header() {
    return (
        <div className="p-3 text-bg-dark">
    
            <Navbar expand="lg" className="bg-body-tertiary shadow" data-bs-theme="dark" title='На главную'>
                
                <Container >

                    <Navbar className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="https://anygis.ru/Web/Img/AnyGIS_logo_50.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                />{' '}

                            </Navbar.Brand>

                            <Navbar.Brand href="/">
                                <h5 style={{ marginBottom: 0}}>AnyGIS</h5>
                                <p style={{ fontSize: 8, marginBottom: 0, color : '#ffffff8c'}}>online maps pack</p>
                            </Navbar.Brand>

                        </Container>
                    </Navbar>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto px-3">
                        {/* <Nav.Link href="#home">На главную</Nav.Link> */}
                        <Nav.Link href="downloadpage">Скачать карты</Nav.Link>
                        <Nav.Link href="addmap">Добавить свою карту</Nav.Link>
                        <Nav.Link href="articles">Полезные статьи</Nav.Link>
                        <Nav.Link href="about">Контакты</Nav.Link>
                        {/* <Nav.Link href="donation">Поддержать проект</Nav.Link> */}
                    </Nav>


                    <img
                            src="https://anygis.ru/Web/Img/changeLanguage.png"
                            // width="39"
                            // height="25"
                            width="34"
                            height="22"
                            className="d-inline-block align-top"
                    />

                    </Navbar.Collapse>


                    </Container>


                </Navbar>

        </div>
    )
}