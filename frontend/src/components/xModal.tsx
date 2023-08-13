import React, { useState } from "react";
import { IProduct } from "../data/IProduct";
import axios from 'axios'

export function Modal() {

    const [value, setValue] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        if (value.trim.length === 0) {
            //setError
            //return
        }
        //const res = await axios.post<IProduct>("www.mmax.com", productData)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5  text-bg-dark" data-bs-theme="dark">
        <div className="modal-dialog">
            <div className="modal-content rounded-4 shadow">
                
                qwerty
                <form onSubmit={submitHandler}>
                    <input 
                        type="text"
                        placeholder="Enter text"
                        value={ value }
                        onChange={ changeHandler }
                    />

                    <button type="submit">Submit</button>

                    
                </form>

            </div>
        </div>
    </div>
}