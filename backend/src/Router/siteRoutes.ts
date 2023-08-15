import express, { Express, Request, Response } from 'express';

export const siteRoutes = ( app: Express ) => {

 // Site pages

    app.get( "/", ( req: Request, res: Response ) => {
        res.redirect('http://localhost:3000/')
    } );

    app.get( "/downloadpage", ( req: Request, res: Response ) => {
        res.redirect('http://localhost:3000/downloadpage')
    } );

    app.get( "/addmap", ( req: Request, res: Response ) => {
        res.redirect('http://localhost:3000/addmap')
    } );

    app.get( "/articles", ( req: Request, res: Response ) => {
        res.redirect('http://localhost:3000/articles')
    } );

    app.get( "/about", ( req: Request, res: Response ) => {
        res.redirect('http://localhost:3000/about')
    } );

}
