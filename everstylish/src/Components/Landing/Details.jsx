import styles from "./trinket.module.css"

function Details() {
    return(
        <div className={styles.outmost}>
            <div className={styles.flex}>
                <img src="https://media.istockphoto.com/vectors/taxi-car-thin-line-icon-passenger-transportation-vehicle-symbol-on-vector-id1213008683?k=6&m=1213008683&s=612x612&w=0&h=fYZaavcFTKA6g2DFKhUG2Q1FMJIZKrGdsF2sTfN4DDU=" alt="ship" width="30px" height="30px"/>
                <div>
                    <h4>FREE SHIPPING</h4>
                    <p>Free shipping on shopping worth<br/> Rs.600 or above</p>
                </div>
            </div>
            <div className={styles.flex}>
                <img src="https://thumbs.dreamstime.com/b/handshake-line-icon-one-hand-support-another-outline-style-pictogram-white-background-partnership-successful-deal-mobile-178992733.jpg" alt="support" width="30px" height="30px"/>
                <div>
                    <h4>Dedicated Support</h4>
                    <p>Call us at 8882188858 (11am <br/> to 6pm) or drop an email at <br/>care@everstylish.com</p>
                </div>
            </div>
            <div className={styles.flex}>
                <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30841809.jpg" width="50px" height="50px" />
                <div>
                    <h4>EASY RETURNS</h4>
                    <p>Simply inform us within 48<br/>hours and we'll pick it up<br/> from your place.</p>
                </div>
            </div>
            <div className={styles.flex}>
                <img src="https://cdn1.iconfinder.com/data/icons/basic-grey-outline-badges/32/grey-badges_grey-keyhole-512.png" width="30px" height="30px"/>
                <div>
                    <h4>100% PAYMENT SECURE</h4>
                    <p>We ensure secure payment with<br/> PEV</p>
                </div>
            </div>
        </div>
    )
}

export {Details}