import React from 'react'
import {Button} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Selector } from './SelectorComponent'
import { FetchProducts } from "./FetchProducts"
import { Loader } from "./Loader"
import { ErrorMessage } from "./ErrorMessage"
import { MapCardComponent } from './MapCardComponent'

export function DownloadPage() {

    const { loading, error, products } = FetchProducts()   

    return (
        <Container className="col-md-8 h-100">

            <div className="container-xxl bd-gutter pt-md-1 pb-md-4 text-bg-dark">
                
                <h1>Скачать карты</h1>

                <Selector />

                <Container className="col-md-8 my-4">
                    <div className="list-group">
                        { loading && <Loader /> }
                        { error && <ErrorMessage error={ error } /> }
                        { products.map((product, index) => <MapCardComponent product={ product } key={ product.id } />) }
                    </div>
                </Container>
            
            </div>
        </Container>
    )
}