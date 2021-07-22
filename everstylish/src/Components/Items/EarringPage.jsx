import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from './header'
import { Item } from './Item'
import { Path } from './Path'
import styles from "./Item.module.css"
import { earringsDeatils } from '../../Redux/Products/Action'

export const EarringPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(earringsDeatils())
    },[dispatch])
    const items = useSelector(state => state.data.earrings)
    return (
        <div>
            <div>
                <Header head="EARRINGS"/>
            </div>
            <Path paths="Home > Jewellery > Earrings"/>
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
