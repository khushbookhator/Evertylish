import React from 'react'
import styles from "./Item.module.css"

const Header = ({head}) => {
    return (
        <h1 className={styles.headerer}>{head}</h1>
    )
}

export {Header}
