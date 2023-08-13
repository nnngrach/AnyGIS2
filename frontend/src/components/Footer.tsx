import React from 'react'
import {Button} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Footer() {
    return (

        <div className="container text-bg-dark mt-auto" data-bs-theme="dark">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    {/* <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg> */}
                    <img
                            alt=""
                            src="https://anygis.ru/Web/Img/AnyGIS_logo_50.png"
                            width="24"
                            height="24"
                            className="d-inline-block align-top"
                            />
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">AnyGIS</span>
                </div>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#Contacts" className="nav-link px-2 text-body-secondary">Контакты</a></li>
                    <li className="nav-item"><a href="#GitHub" className="nav-link px-2 text-body-secondary">Fork on GitHub</a></li>
                </ul>
            </footer>
            </div>


    )
}