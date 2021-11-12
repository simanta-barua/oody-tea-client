import { useEffect, useState } from 'react';


const useFetch = () => {
    const url = 'http://localhost:5000/products'
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.products)
            )
    }, [])
    return [products]
}

export default useFetch;