

export function replaceStandardPlaceholders(z: number, x: number, y: number , urlTemplate: string): string {

    let url: string = urlTemplate
    if (url.includes('{z}')) {
        url = url.replace('{z}', getZ(z, x, y).toString() )
    }
    if (url.includes('{x}')) {
        url = url.replace('{x}', getX(z, x, y).toString() )
    }
    if (url.includes('{y}')) {
        url = url.replace('{y}', getY(z, x, y).toString() )
    }
   
    return url
}

function getZ(z: number, x: number, y: number): number {
    return z
}

function getX(z: number, x: number, y: number): number {
    return x
}

function getY(z: number, x: number, y: number): number {
    return y
}