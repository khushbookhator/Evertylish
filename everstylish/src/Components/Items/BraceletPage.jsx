import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from './header'
import { Item } from './Item'
import { Path } from './Path'
import styles from "./Item.module.css"
import { braceletsDetails } from '../../Redux/Products/Action'

export const BraceletPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(braceletsDetails())
    },[dispatch])
    const items = useSelector(state => state.data.bracelet)

    return (
        <div>
            <div>
                <Header head=""/>
            </div>
            <Path paths="Home > Jewellery > Bracelets and Anklets"/>
            <div className={styles.settings}>

            </div>
            <div className={styles.wrap1}>
            {items?.map((it) => 
                    <Item
                    id={it._id}
                    im={it.imageUrl}
                    des={it.description}
                    price={it.new_price}
                    />
                )}
            </div>
        </div>
    )
}
