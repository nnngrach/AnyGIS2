import express, { Express, Request, Response } from 'express';
import * as emptyRoutes from './empty'
import { siteRoutes } from './siteRoutes';  
import { MapRequestParameters } from '../Models/MapRequest'
import { GetSimpleTile } from '../Usecases/GetSimpleTile'

export const registerRoutes = ( app: Express ) => {

    //Api pages

    app.get( "/api/", ( req: any, res: Response ) => {
        res.json({ text: 'Hello World from backend !!!' });
    } );
    
    app.get( "/api/v2/tile/:z/:x/:y/:body", ( req: any, res: Response ) => {
        const z: number = parseInt(req.params["z"])
        const x: number = parseInt(req.params["x"])
        const y: number = parseInt(req.params["y"])
        const body: string = req.params["body"]
        if (!Number.isNaN(z) &&
            !Number.isNaN(x) &&
            !Number.isNaN(y) &&
            body != undefined && body.length > 0) {
            const base64EncodedBody: string = atob(body);
            const json: MapRequestParameters = JSON.parse(base64EncodedBody);
            GetSimpleTile(z, x, y, json, res)
        } else {
            res.status(400).send('Invalid parameters')
        }
    } );





    app.get( "/api/ping", ( req: any, res: Response ) => {
        res.json({ text: 'Hello World from backend !!!' });
    } );

    app.get( "/api/list", ( req: any, res: Response ) => {
        // res.json([{text: 'First'}, {text: 'Second'}, {text: 'Third'}]);
        res.redirect('/files/mapsListCopy.js')
    } );

    app.get( "/api/get_test_tile", ( req: any, res: Response ) => {
        // res.json([{text: 'First'}, {text: 'Second'}, {text: 'Third'}]);
        res.redirect('https://tile.openstreetmap.org/0/0/0.png')
    } );


    
    

    emptyRoutes.registerRoutes(app);
    siteRoutes(app);


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
