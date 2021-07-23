import { Link } from "react-router-dom"
import styles from "./Item.module.css"


function Item({id, im, des, price, oldPrice}) {
    return(
        <Link to={`/rings/${id}`} key={id} className={styles.links}>
            <img width="100%" src={im} alt="rings"/>
            <p className={styles.paddings}>{des}</p>
            <div className={styles.flex}>
                <p className={styles.croos}>{`₹${oldPrice}`}</p>
                <p className={styles.paddings}>{`₹${price}`}</p>
            </div>
        </Link>
    )
}

export {Item}