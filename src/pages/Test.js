import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Test = () => {
    const [productDetails, setProductDetails] = useState([]);
    
    useEffect(() => {
      const getProductDetails = async () => {
        const response = await axios
          .get("https://classibazaar.com.au/api/deal/products")
          .catch((err) => {
            console.log(err);
          });
        setProductDetails(response.data);
      };
      getProductDetails();
    }, []);
    
    return (
        <div>
           {productDetails.id}
        </div>
    )
}

export default Test
