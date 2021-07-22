import React from 'react'
import styles from "./tabs.module.css"

const CartItem = ({urls, des, price, qty, id, removeCartData}) => {

    return (
        <div className={styles.cartitemlayout} key={id}>
            <img className={styles.imgur} src={urls} alt="itemincart"/>
            <div className={styles.dets}>
                <h3>{des}</h3>
                <p>Min Dispatch Time: 15-20 days</p>
                <p>Price: Rs. {price}.00</p>
                <p>{qty}</p>
                <p>Rs. {price*qty}</p>
                <p>{id}</p>
                <button onClick={() => removeCartData(id)}>REMOVE</button>
            </div>
        </div>
    )
}

export {CartItem}
