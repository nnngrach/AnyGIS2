import express from 'express';
import * as emptyRoutes from './empty'

export const registerRoutes = ( app: express.Application ) => {

    app.get( "/", ( req: any, res ) => {
        res.json({ text: 'Hello World from backend !!!' });
    } );

    app.get( "/list", ( req: any, res ) => {
        // res.json([{text: 'First'}, {text: 'Second'}, {text: 'Third'}]);
        res.redirect('/files/mapsListCopy.js')
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
