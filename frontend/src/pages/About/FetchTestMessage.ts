import React, {useState, useEffect} from "react";
import axios, { Axios, AxiosError } from 'axios'
import { ITestMessage } from "./ITestMessage";

export function FetchTestMessage() {

    const [product, setProduct] = useState<ITestMessage>()  
    const [loading, setLoading] = useState(false)    
    const [error, setError] = useState("")    

    async function fetchProducts() {
        try {
            setError("")
            setLoading(true)
            const response = await axios.get<ITestMessage>('http://localhost:8000/')
            setProduct(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
        
    }

    useEffect( () => {
        fetchProducts()
    },  [])

    return {product, error, loading}
}