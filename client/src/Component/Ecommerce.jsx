import React, { useState, useEffect } from 'react';


function Ecommerce() {
    const [productData, setProductData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchName, setSearchName] = useState('');
    const itemsPerPage = 12;
    var image = [], price = [], productName = [],pid=[];
    // var i = 0;

    var productDetail = [
    ]
    useEffect(() => {
        // Fetch data from the API
        fetch('https://node-app-rust.vercel.app/products')
            .then(response => response.json())
            .then(data => setProductData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!productData) {
        return <div className='loading'>Loading...</div>;
    }

    const product = productData.products; // Assuming there's only one product in the response

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const inputchange=((e)=>
    {
        setSearchName(e.target.value);
        setCurrentPage(1)
        // currentItems=filteredItems
    });



    product.map((data, index) => {

        data.images.forEach((item, itemIndex) => {

            image.push(item.src);

            // console.log(productDetail)
        });
        data.variants.forEach((item, itemIndex) => {

            price.push(item.price);
            productName.push(item.title)
            pid.push(item.id)
            // console.log(productDetail)
        });

       
    }
    
    )
    var x=[1];
    
        for(let i=0;i<image.length;i++)
        {
            productDetail.push({productId:pid[i],
            productImg:image[i],
        productPrice:price[i],
    productTitle:productName[i]})
        }
   

    


let filteredItems = productDetail.filter(item => {
    if(item.productTitle && item.productPrice && item.productId)
    return (
        
        item.productTitle.toLowerCase().includes(searchName.toLowerCase()) ||
        item.productPrice.includes(searchName)
       

  
    );
    // console.log(productDetail)
    // setCurrentPage(1)

    // ||
    // item.productId.toString().includes(searchName)
   

})


    return (
        <div>
             <div className='searchBar'>
                <h3>Search Name</h3>
                <input
                    type="text"
                    placeholder="search"
                    value={searchName}
                    onChange={inputchange}
                />
                </div>
        <div className="product-container">


            <div className="product-list product-details variant-details" >
               
                
                {
                    
                    filteredItems.slice(indexOfFirstItem, indexOfLastItem).map((m, index) => {
                        return (
                            <span className="variant">


                                <img className="product-images variant" src={m.productImg} alt="Loading" />
                                {/* <p>{data.variants[0].position}</p> */}
                                <h5>{m.productTitle}</h5>
                                <p>{m.productPrice}</p>
                               
                            </span>


                        )
                    })
                }
            </div>
            <div className='setpage'>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >=filteredItems.length}>Next</button>
            </div>
        </div>
        </div>

    );
}

export default Ecommerce;
