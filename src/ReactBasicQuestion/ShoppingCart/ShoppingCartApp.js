import React,{useState} from "react";
import ProductList from './ProductList';
import CartDetails from './CartDetails';

const ShoppingCartApp =() => {
    const [cart, setCart] = useState([]);

    const AddProdcart =(product)=> {
        setCart([...cart, product])
    };

    return(
        <>
        <h2>Product page</h2>
        <ProductList addToCart={AddProdcart}/>
        <h3>Cart Details</h3>
        <CartDetails cartList={cart}/>
        </>
    );
};
export default ShoppingCartApp;