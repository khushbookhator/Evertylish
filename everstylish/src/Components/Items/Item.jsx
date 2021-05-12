import { Link } from "react-router-dom"
import styles from "./Item.module.css"


function Item({id, im, des, price}) {
    return(
        <Link to={`/rings/${id}`} key={id} className={styles.links}>
            <img width="100%" src={im} alt="rings"/>
            <p className={styles.paddings}>{des}</p>
            <div className={styles.flex}>
                <p className={styles.paddings}>{`₹${
                Math.round(((price/25)*100)/10)*10-1}`}</p>
                <p className={styles.paddings}>{`₹${price}`}</p>
            </div>
        </Link>
    )
}

export {Item}