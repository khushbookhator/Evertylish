import React from 'react'
import styles from "./Item.module.css"

export const Path = ({paths}) => {
    return (
        <div className={styles.paths}>
            {paths}
        </div>
    )
}
