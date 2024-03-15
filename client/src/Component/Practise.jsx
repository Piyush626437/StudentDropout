import React from 'react'
import { ReactDOM } from 'react'
import { useEffect,useState } from 'react';

function Practise()
{
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://node-app-rust.vercel.app/products')
            .then(response => response.json())
            .then(data => setProductData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!productData) {
        return <div>Loading...</div>;
    }

    // const product = productData.products;

    return(
        <>
        {
            productData.products[0].variants.map(data=>
                {
                    return(
                    <h3>{data.title}</h3>
            );
        })
        }
        </>
    );
}

export default Practise;