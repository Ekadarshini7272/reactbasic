import React,{useState} from "react";
const ProductCard = ({productData}) => {
    return(
        <>
        <div>
            <h1>{productData.name}</h1>
            <p>{productData.price}</p>
        </div>
        </>
    );
};
export default ProductCard;