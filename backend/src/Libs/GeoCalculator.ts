import { TileNumber, EllipsoidTileNumber } from '../Models/TileNumber'
import { LatLon, LatLonZoom } from '../Models/LatLon'

const EARTH_RADIUS_B: number = 6356752
const EARTH_RADIUS_A: number = 6378137


export function replaceStandardPlaceholders(z: number, x: number, y: number , urlTemplate: string): string {

    let url: string = urlTemplate
    if (url.includes('{z}')) {
        const res = z.toString()
        url = url.replace('{z}',res )
    }
    if (url.includes('{x}')) {
        const res = x.toString()
        url = url.replace('{x}', res )
    }
    if (url.includes('{y}')) {
        const res = y.toString()
        url = url.replace('{y}',res )
    }
   
    return url
}



//  ZXY -> LatLon

function yToLat(z: number, y: number): number {
    return Math.atan( Math.sinh( Math.PI - y / Math.pow(2, z)) * 2 * Math.PI) * (180 / Math.PI)
}

function xToLon(z: number, x: number): number {
    return (x / Math.pow(2, z)) * 360 - 180
}

function tileNumberToCoordinates(z: number, x: number, y: number): LatLonZoom {
    const lat = yToLat(z, y)
    const lon = xToLon(z, x)
    return { lat:lat, lon:lon, z:z }
}


// LatLon -> ZXY

function lonToX(z: number, lon: number): number {
    return Math.floor((lon + 180) / 360 * Math.pow(2, z))
}

function latToY(z: number, lat: number): number {
    return Math.floor((1 - Math.log( Math.tan( lat * Math.PI / 180 ) + 1 / Math.cos( lat * Math.PI / 180 )) / Math.PI ) / 2 * Math.pow(2, z))
}

function coordinatesToTileNumbers(lat: number, lon: number, z: number): TileNumber {
    const tileX = lonToX(z, lon)
    const tileY = latToY(z, lat)
    return {z: z, x: tileX, y: tileY}
}


// WGS-84 proection transformations

function getTileEllipsoidNumberAndOffsetY(lat: number, lon:number, z: number, tileSize: number): EllipsoidTileNumber {
    const E2: number = lat * Math.PI / 180
    const J2: number = Math.sqrt( (Math.pow(2, EARTH_RADIUS_A) - Math.pow(2, EARTH_RADIUS_B)) / EARTH_RADIUS_A)
    const M2: number = Math.log( (1 + Math.sin(E2)) ) / (1 - Math.sin(E2))  /  2  - J2 * Math.log((1 + J2 * Math.sin(E2)) / (1 - J2 * Math.sin(E2))) / 2
    const B2: number = Math.pow(2, z)
    const tileY: number = B2 / 2 - M2 * B2 / 2 / Math.PI
    const tilesCount: number = 1 << z
    const yTileNumber: number = Math.floor( tilesCount * (0.5 - M2 / 2 / Math.PI) ) 
    const offsetY: number = Math.floor( (tilesCount * (0.5 - M2 / 2 / Math.PI) - yTileNumber) * tileSize ) 
    return { z: z, x: 0, y: tileY, yOffset: offsetY }
}
