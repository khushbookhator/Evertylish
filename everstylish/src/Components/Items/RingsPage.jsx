import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ringsDetails } from '../../Redux/Products/Action'
import { Header } from './header'
import { Item } from './Item'
import { Path } from './Path'
import styles from "./Item.module.css"

export const RingsPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ringsDetails())
    },[dispatch])
    const items = useSelector(state => state.data.rings)

    return (
        <div>
            <div>
                <Header head="RINGS"/>
            </div>
            <Path paths="Home > Jewellery > Rings"/>
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
