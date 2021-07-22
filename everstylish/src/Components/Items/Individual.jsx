import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Header } from './header'
import { Path } from './Path'
import styles from "./Item.module.css"
import { addToCart } from '../../Redux/Cart/Action'
import { individualDetails } from '../../Redux/Products/Action'

const Individual = () => {
    const [qty, setQty] = useState(1)
    const dispatch =  useDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch(individualDetails(id))
    },[dispatch, id])
    console.log(id)
    const individualData = useSelector(state => state.data.individual)

    const addToBag = () => {
        document.getElementById("addbtn").textContent = "ADDING..."
        setTimeout(() => {
            document.getElementById("addbtn").textContent = "ADD TO BAG"
        },1500)
        dispatch(addToCart(id, qty))
    }

    return (
        <>
          <Header head={individualData?.description}/>
          <Path paths={`Home > Jewellery > ${individualData?.type}`}/>  
          <div className={styles.cont1}>
              <div className={styles.outerimg}>
                    <img width="80%" height="90%" src={individualData?.imageUrl} alt="item"/>
              </div>
              <div className={styles.outerdivs}>
                  <div>
                    <div className={styles.flex}>
                        <h3 className={styles.cross}>{`₹${individualData?.old_price}`}</h3>
                        <h3 className={styles.price}>{`₹${individualData?.new_price}`}</h3>
                    </div>
                    <p className={styles.left}>COLOR NAME</p>
                    <p className={styles.left}>Material details</p>
                    <div className={styles.flex2}>
                        <p>QTY</p>
                        <select onChange={(e) => setQty(e.target.value)} className={styles.qty}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <button onClick={addToBag} id="addbtn" className={styles.btns}>ADD TO BAG</button>
                        <p>FAV ICON</p>
                    </div>
                    <div className={styles.flex}>
                       <p className={styles.pink}>SIZE CHART</p>
                       <p className={styles.pink}>DELIVERY & RETURN</p>
                    </div>
                       <p>Availibility: In Stock</p>
                       <p>SKU : <span className={styles.pink}>ADL111545</span></p>
                  </div>
              </div>
          </div>
          <div>
            {/* <button styles={styles.cares}>CARE & HANDLING</button> */}
          </div>




          {/* <div className={styles.cont2}>
                <p>We know how much you love our jewellery so we have created a small guide as to how you can make your jewellery last a long time.</p>
                <p>Fashion jewelry tarnishes when exposed to moisture, oils, salts and acids. Keep your jewellery tarnish free by keeping it dry. </p>
                <p>Don't Wash Dishes or do Laundry With Your Jewelry on. </p>
                <p>Don't Wear Jewelry In Pool or at the Spa. </p>
                <p>Don't Put on Lotion or Perfume with your Jewelry on. </p>
                <p>Dry your hands before handling, or putting on, any piece of fashion jewelry from your collection. </p>
                <p>Remove your jewelry before showering, swimming or exercising. </p>
                <p>Thoroughly wipe each piece of jewelry with a soft, clean cloth as soon as you remove it. </p>
                <p>The goal is to remove any oil, salt or acid contaminants and to dry the piece. </p>
                <p>Wear it last, and take it off first.</p>
                <p>Put Your Jewelry on After You Put Your Clothes on and Before Your Take Your Clothes Off. An accidental pull on the chain can break your favourite necklace. </p>
                <p>When performing activities such as laundry, cooking, or gardening, remove your jewelry to prevent physical damage or exposure to cleaning chemicals or cleaning fluids. </p>
                <p>Put Jewelry On After Applying Hairspray and Makeup. This goes back to keeping your jewelry dry. Perfumes, hairspray, lotion and makeup usually contains harsh chemicals that can damage your beautiful jewelry.</p>
                <p>Store your fashion jewellery in a soft dry place to avoid damage due to moisture in the air.</p>
                <p>Store your jewelry in a jewelry box or other secure container.</p>
                <p>You can also store your jewelry in a silk or velvet pouch and put each pouch in a decorative shoe box.</p>
                <p>Avoid Air! The air around us is what makes metal tarnish.</p>
                <p>We recommend using a ziplock or sandwich bag with the air squeezed out to prevent oxidisation.</p>
          </div> */}
        </>
    )
}

export {Individual}
