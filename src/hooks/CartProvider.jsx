import React, { useState, createContext, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [hasLoadedCart, setHasLoadedCart] = useState(false);
    
    //this will handle the cart items from local storage

    // loads the local storage to storedCart
    useEffect(()=> {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        setHasLoadedCart(true);
    },[])

    // writes items --> local storage
    useEffect(()=>{
        if (hasLoadedCart) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log(`saved cart`)
        }
    },[cartItems, hasLoadedCart])

    const addToCart = (product,quantity) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item)=> item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                item.id === product.id ? {...item, quantity: item.quantity + quantity} : item
                )
            } else {
                return [...prevItems, { ...product, quantity: quantity }];
            }
        })
    }

    const removeFromCart = (id) => {
        setCartItems((prevItems)=> prevItems.filter((item) => item.id !== id));
    }

    const clearCart = () => {setCartItems([])};
    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext);