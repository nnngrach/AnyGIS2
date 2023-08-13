import express from 'express'

//Just for test

export const registerRoutes = ( app: express.Application ) => {

    app.get( "/get", ( req: any, res ) => {
        res.send('Hello World');
    } );
}
