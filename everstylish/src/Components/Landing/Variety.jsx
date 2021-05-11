import React from "react"
import styles from "./trinket.module.css"
import {Link} from "react-router-dom"

function Types() {
    return(
        <div className={styles.typ}>
            <div className={styles.ones}>
                <img alt="pics" src="https://everstylish.com/pub/media/promobanners//a/d/adl11156_4.jpg"/>
                <Link to={"/rings"}><button className={styles.btns}>Rings</button></Link>
            </div>
            <div className={styles.ones}>
                <img alt="pics" src="https://everstylish.com/pub/media/promobanners//a/d/adl11357_4_2_2.jpg"/>
                <button className={styles.btns}>Bracelet</button>
            </div>
            <div className={styles.ones}>
                <img alt="pics" src="https://everstylish.com/pub/media/promobanners//a/d/adl11270-2_1.jpg"/>
                <button className={styles.btns}>Neckpieces</button>
            </div>
            <div className={styles.ones}>
                <img alt="pics" src="https://everstylish.com/pub/media/promobanners//a/d/adl11332_2.jpg"/>
                <button className={styles.btns}>Earrings</button>
            </div>
        </div>
    )
}

export {Types}