import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from './header'
import { Item } from './Item'
import { Path } from './Path'
import styles from "./Item.module.css"
import { neckpieceDetails } from '../../Redux/Products/Action'

export const NeckpiecePage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(neckpieceDetails())
    },[dispatch])
    const items = useSelector(state => state.data.neckpiece)

    return (
        <div>
            <div>
                <Header head=""/>
            </div>
            <Path paths="Home > Jewellery > Neckpieces"/>
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
