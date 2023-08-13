import React, {useState} from 'react'
import { IProduct } from "../../data/IProduct"
import { EyeFill, EyeSlash, ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Container } from 'react-bootstrap';




interface MapCardProps {
    product: IProduct
}

export function MapCardComponent(props: MapCardProps) {

    const [details, setDetails] = useState(false) 

    return (
        <div className="list-group-item list-group-item-action d-flex gap-3 py-3 shadow">
            <Container>

                <div className="d-flex gap-5 py-1">

                    { details ?
                        <ChevronUp
                            size={22} 
                            title="Свернуть"
                            onClick={() => setDetails(!details)}
                        />
                    :          
                        <ChevronDown size={22} 
                            title="Развернуть"
                            onClick={() => setDetails(!details)}
                        />
                       
                    }

                    <div title="Скачать файл">
                        {props.product.title}
                    </div>


                </div>


                { details &&
                    <div className='py-2' onClick={openNakarte}>
                        <a href="http://nakarte.me" title="Предпросмотр карты" target="_blank">
                        <img src="https://tile.openstreetmap.org/5/15/11.png" className="w-25" />
                        <img src="https://tile.openstreetmap.org/5/16/11.png" className="w-25" />
                        <img src="https://tile.openstreetmap.org/5/17/11.png" className="w-25" />
                        <img src="https://tile.openstreetmap.org/5/18/11.png" className="w-25" />
                        </a>
                    </div>
                }  

            </Container>
        
        </div>
    )
}


function openNakarte() {
    console.log("openNakarte")
}