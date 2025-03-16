import React, {useState} from "react";
const ProductList =({addToCart}) => {
    const ProdList = [
        {id: 1, name: "Laptop", price: 12000},
        {id: 2, name: "Mobile", price: 30000},
        {id: 3, name: "Earphone", price: 2000},
        {id: 4, name: "Headphone", price: 3000}
    ]
    return (
        <>
        <h3>All Product</h3>
        {ProdList.map((product) => (
          <div key={product.id}> 
          <h6>{product.name}</h6>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
          </div> 
        ))
        }

        </>
    );
};
export default ProductList;