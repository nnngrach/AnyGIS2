import express, { Express, Request, Response } from 'express';
import { MapRequestParameters } from '../Models/MapRequest'
import {replaceStandardPlaceholders} from '../Libs/GeoCalculator'

export function GetSimpleTile(z: number, x: number, y: number, params: MapRequestParameters, res : Response ) {

    if (params.url != undefined) {
        let urlTemplate: string = params.url
        urlTemplate = replaceStandardPlaceholders(z, x, y, urlTemplate)
        res.redirect(urlTemplate)
    }
}
