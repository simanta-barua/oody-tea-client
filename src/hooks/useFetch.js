import { useEffect, useState } from 'react';


const useFetch = () => {
    const url = 'https://stormy-refuge-07494.herokuapp.com/products'
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