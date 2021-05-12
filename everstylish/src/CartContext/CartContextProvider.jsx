import React, { createContext, useState } from 'react'
import { getData, saveData } from '../Utils/LocalStorage'


export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState(getData("cart"))

    const goToCart = (payload) => {
        setCart([...cart.filter(item => item.id !== payload.id), payload])
        saveData("cart", [...cart.filter(item => item.id !== payload.id), payload])
    }
    const removeFromCart=(id)=>{
        setCart([...cart.filter(item=>item.id !== id)])
        saveData("cart",[...cart.filter(item=>item.id !== id)])
    }

    const values = {
        cart,
        goToCart,
        removeFromCart
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContextProvider}
