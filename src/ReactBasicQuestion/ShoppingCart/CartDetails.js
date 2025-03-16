import React from "react";
const CartDetails = ({cartList}) => {
    return(
        <>
        {cartList.length === 0 ? (
          <p>Product not available</p>
        ):(
          cartList.map((item, index) => (
            <div key={index}>
                <h6>{item.name}</h6>
                <p>{item.price}</p>
            </div>
          ))
        )}
        </>
    );
};
export default CartDetails;