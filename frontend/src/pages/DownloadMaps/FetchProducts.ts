import React, {useState, useEffect} from "react";
import axios, { Axios, AxiosError } from 'axios'
import { IProduct } from "../../data/IProduct";

export function FetchProducts() {

    const [products, setProduct] = useState<IProduct[]>([])  
    const [loading, setLoading] = useState(false)    
    const [error, setError] = useState("")    

    async function fetchProducts() {
        try {
            setError("")
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
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

    return {products, error, loading}
}