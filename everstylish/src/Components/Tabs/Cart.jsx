import React, { useEffect, useState } from 'react'
import { getData } from '../../Utils/LocalStorage'
import { Header } from '../Items/header'
import { Path } from '../Items/Path'
import { CartItem } from './CartItem'
import styles from "./tabs.module.css"
import { removeFromCart } from '../../Redux/Cart/Action'
import { useDispatch } from 'react-redux'


const Cart = () => {
    const cart = getData("cart")
    const [total,setTotal] = useState(0)
    useEffect(()=>{
        if(cart.length===1){
            setTotal(cart[0].price*cart[0].qty)
        }else if(cart.length !== 0 && cart.length > 1){
            setTotal(cart.reduce((a,b)=>a+b.price*b.qty,0))
        }
    },[cart])

    const dispatch = useDispatch()
    const removeCartData = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div>
            <Header head="SHOPPING BAG"/>
            <Path paths="Home > Shopping Bag"/>
            <div className={styles.carthead}>
                <div className={styles.cartdetails}>
                    {
                        cart?.map((el) => (
                            <CartItem
                            urls={el.imageUrl}
                            des={el.description}
                            price={el.price}
                            qty={el.qty}
                            id={el.id}
                            removeCartData={removeCartData}
                            />
                        ))
                    }
                </div>
                <div className={styles.cartamounts}>
                    <div className={styles.cartcover}>
                    <div className={styles.divider}>
                        <div className={styles.flex}>
                            <p>Subtotal</p>
                            <p>Rs.{total}</p>
                        </div>
                        <div className={styles.flex}>
                            <div style={{
                                textAlign:"left"
                            }}>
                                <p>Shipping</p>
                                <p>(free for orders<br/>above Rs. 600)</p>
                            </div>
                            <p>Rs.60</p>
                        </div>
                    </div>
                    <div className={styles.orderss}>
                        <div className={styles.flex}>
                            <h3>Order Total</h3>
                            <h3>Rs.{total+60}</h3>
                        </div>
                    </div>
                    </div>
                    <br/><br/>
                    <button className={styles.place}>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export {Cart}
