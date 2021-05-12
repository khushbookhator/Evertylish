import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productDetails } from '../../Redux/Action'
import { Header } from './header'
import { Item } from './Item'
import { Path } from './Path'
import styles from "./Item.module.css"

export const NeckpiecePage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productDetails())
    },[dispatch])
    const items = useSelector(state => state.data.items)

    return (
        <div>
            <div>
                <Header head=""/>
            </div>
            <Path paths="Home > Jewellery > Neckpieces"/>
            <div className={styles.settings}>

            </div>
            <div className={styles.wrap1}>
                {items?.filter((item) => item.type === "neckpiece").map((it) => 
                    <Item
                    id={it.id}
                    im={it.img}
                    des={it.desctoption}
                    price={it.price}
                    />
                )}
            </div>
        </div>
    )
}
