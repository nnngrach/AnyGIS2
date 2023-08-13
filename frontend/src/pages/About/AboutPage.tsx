import React from "react";
import Container from 'react-bootstrap/Container';
import { FetchTestMessage } from './FetchTestMessage'

export function AboutPage() {

    const { loading, error, product } = FetchTestMessage()  

    return (
        <Container className="col-md-8">
            <h1>Контакты</h1>

            PING:   { product && product.text }
            
            {/* <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptas sint quidem vitae doloremque aspernatur rerum odit dolor blanditiis! Ab eveniet expedita ullam similique aliquid debitis quas alias recusandae minus? </div> */}
        
        </Container>
    )
}