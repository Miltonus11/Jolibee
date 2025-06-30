import React, {useState} from 'react';
import MenuCard from "../../components/MenuCard/MenuCard";
import {useCart} from '../../hooks/CartProvider'
import styles from './CartItems.module.css'
import { CartItemCart } from "../../components/CartItemCard/CartItemCard";
const CartItems = () => {
    const {cartItems, clearCart} = useCart();
    const [totalPrice, setTotalPrice] = useState(1);
    if (cartItems.length > 0) {
        return(
            <>
                {console.log(cartItems)}
                <p className={styles.orderTitle}> Your Orders</p>
                <div className={styles.orderContainer}>
                    {cartItems.map((item) => (
                    <div className={styles.orderCard} key={item.id}>
                        <img src={item.image}/>
                        <p style={{fontFamily:"Jellee", fontSize: 18}}> {item.productName}</p>
                        <p> Quanity: {item.quantity}</p>
                        <p> Total Price: {totalPrice}</p>
                    </div>
                ))}
                </div>
                
                <div style={{display:"flex", justifyContent:"center", marginTop: 20}}>
                {/* <button className={styles.btnClear} onClick={clearCart}> Proceed to Check Out</button> */}
                <button className={styles.btnClear} onClick={clearCart}> Clear Cart</button>
                </div>
            </>
        )
        
    } else {
        return(
            <p className={styles.noDisplayText}> No Items in your Cart</p>
        )
        
    }
}

export default CartItems;