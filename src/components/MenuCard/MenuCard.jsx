import React, { useState, createContext, useContext, useEffect } from 'react';
import img1 from '../../assets/Images/jabee pics/Menu/Breakfast/1pc-breakfast-chickenjoy.png'
import styles from './MenuCard.module.css'
import '../../index.css'
import { useCart } from '../../hooks/CartProvider'
function MenuCard ({product}){
    const {addToCart} = useCart();
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(1);

    // calculate the total price of the product
    const calculateTotalPrice = () => {
        let total = 0
        total = product.price * quantity;
        setTotalPrice(total);
        
    }
    useEffect(() => {
        calculateTotalPrice();
        console.log(`total price: ${totalPrice}`);
    }), [quantity, product.price];
    

    const handleAddQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    const handleMinusQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity - 1);
    }
    return (

        <div className={styles.MenuCardContainer}>

            <div className={styles.cardDetails}>
                <img src={product.image} style={{width:350}}/>
                <p className={styles.productName}>{product.productName}</p>

                {/* sets the values to default 1  */}
                <button 
                    className={styles.btnOrderNow} 
                    onClick={() =>{
                         setShowModal(true);
                         setQuantity(1);
                         setSelectedProduct(product);
                         }} > Order Now
                        </button>
                        {
                            showModal &&  (
                                <div className={styles.modal}>
                                    <div className={styles.modalContent}>
                                        <p style={{fontFamily:'Jellee', fontSize: 30}}> Your Order </p>
                                        <img src={product.image} />
                                        <p style={{fontFamily:'Jellee', fontSize: 30, marginBottom: 0}}> {product.productName}</p>
                                        <p style={{fontFamily:'Jellee', fontSize: 15,}}>P {product.price}</p>
                                        <div className={styles.orderCountContainer}>
                                            <button onClick={handleMinusQuantity} className={styles.btnAddQuantity}> - </button>
                                            <p> {quantity} </p>
                                            <button onClick={handleAddQuantity} className={styles.btnMinusQuantity}> + </button>
                                        </div>
                                        <div>
                                            <p style={{fontFamily:'Jellee', fontSize: 20, marginTop: 10}}> Total Price: P {totalPrice} </p>
                                        </div>
                                        {/*  handles the  */}
                                        <div className={styles.modalButtons}>
                                            <button className={styles.submitButton} onClick={()=>{addToCart(product, quantity, totalPrice); setShowModal(false); console.log(product, quantity, totalPrice)}}> Add Order</button>
                                            <button className={styles.closeButton} onClick={()=>setShowModal(false)}> Close</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
            </div>
             
        </div>
       
        
    )
}
export default MenuCard;