import React from 'react'
import ReactMarkdown from 'react-markdown'
import Container from 'react-bootstrap/Container';

export function ArticlePage() {
    return (
        <Container className="col-md-8">
        <div className="container-xxl bd-gutter pt-md-1 pb-md-4 text-bg-dark">
            <h1>Полезные статьи</h1>
            Тут будет список статей. Тест markdown:

            <ReactMarkdown>
        
            

            I just love **bold text**.

            

            Italicized text is the *cat's meow*.


            This text is ***really important***.

            # Heading level 1


            ## Heading level 2


            ### Heading level 3

            #### Heading level 4

            ##### Heading level 5 

            </ReactMarkdown>
           
        </div>
        </Container>
    )
}