import React, {useState} from "react";
import ProductCard from "./ProductCard"

const ProductDetails = () => {
    const product = {
        name: "Laptop",
        price: "$1200",
        image: "https://via.placeholder.com/150"
    }
    return(
        <>
        <h4>Product details parent component</h4>
        <ProductCard productData ={product}/>
        </>
    );
};
export default ProductDetails;