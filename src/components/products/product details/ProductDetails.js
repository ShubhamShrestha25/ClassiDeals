import React, { useEffect, useState } from 'react'
import "./ProductDetails.css"
import Navbar from "../../navbar/Navbar"
import axios from 'axios'

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState([])

    useEffect(() => {
        const getProductDetails = async () => {
            const response = await axios.get("https://classibazaar.com.au/api/deal/featured_deals/").catch((err) =>{
                console.log(err)
            })
            setProductDetails(response.data)
        }
        getProductDetails()
    }, [])

    return (
        <>
        <Navbar />
        <div>
            
        </div>
        </>
    )
}

export default ProductDetails
