import express from 'express';
import * as emptyRoutes from './empty'

export const registerRoutes = ( app: express.Application ) => {

    //Api pages

    app.get( "/api/", ( req: any, res ) => {
        res.json({ text: 'Hello World from backend !!!' });
    } );

    app.get( "/api/ping", ( req: any, res ) => {
        res.json({ text: 'Hello World from backend !!!' });
    } );

    app.get( "/api/list", ( req: any, res ) => {
        // res.json([{text: 'First'}, {text: 'Second'}, {text: 'Third'}]);
        res.redirect('/files/mapsListCopy.js')
    } );

    app.get( "/api/get_test_tile", ( req: any, res ) => {
        // res.json([{text: 'First'}, {text: 'Second'}, {text: 'Third'}]);
        res.redirect('https://tile.openstreetmap.org/0/0/0.png')
    } );



    // Site pages

    app.get( "/", ( req: any, res ) => {
        res.redirect('http://localhost:3000/')
    } );

    app.get( "/downloadpage", ( req: any, res ) => {
        res.redirect('http://localhost:3000/downloadpage')
    } );

    app.get( "/addmap", ( req: any, res ) => {
        res.redirect('http://localhost:3000/addmap')
    } );

    app.get( "/articles", ( req: any, res ) => {
        res.redirect('http://localhost:3000/articles')
    } );

    app.get( "/about", ( req: any, res ) => {
        res.redirect('http://localhost:3000/about')
    } );

    
    

    emptyRoutes.registerRoutes(app);


    /*

        Get tile
    anygis.ru/v2/tile/{z}/{x}/{y}/{json}
    anygis.ru/v2/custom_action/{name}/{z}/{x}/{y}


        Generate file
    anygis.ru/v2/generate/single_map/all_formats/{json}
    anygis.ru/v2/generate/single_map/osmand/{json}
    anygis.ru/v2/generate/single_map/locus/{json}

    anygis.ru/v2/generate/all_maps/

    anygis.ru/v2/generate/webpages/


        MapsList database managing

    GET - list of all msp names
    anygis.ru/v2/base/

    GET - get map json
    anygis.ru/v2/base/get/{name}

    POST = add new map (json in body)
    anygis.ru/v2/base/{name}

    PUT = update map (json in body)
    anygis.ru/v2/base/{name}

    DELETE = delete map
    anygis.ru/v2/base/{name}


        Download map file
    anygis.ru/v2/file/map/{name}


        Find map formula by Curl
    anygis.ru/v2/investigate_map/{json}

    */

}
