import React from "react"
import {NavLink} from "react-router-dom"
import styles from "./trinket.module.css"

function Navbar(){
    return(
        <div style={{
            display:"flex",
            height:"60px",
        }}>
            <div>
                <img alt="name" style={{padding:"10px", width:"45%", marginLeft:"0%"}} src="https://everstylish.com/pub/media/logo/default/everstylish_logo_pink_horizontal.png" />
            </div>
            <div style={{
                display:"flex",
                gap:"25px",
                marginLeft:"10%",
                marginTop:"15px",
                fontSize:"14px"
            }}>
                <NavLink className={styles.navlinks} activeStyle={{cursor:"pointer", color:"rgb(251,119,143)"}} to={"/"}>HOME</NavLink>
                <NavLink className={styles.navlinks} activeStyle={{cursor:"pointer", color:"rgb(251,119,143)"}} to={"/all"}>ALL JEWELRY</NavLink>
                <NavLink className={styles.navlinks} activeStyle={{cursor:"pointer", color:"rgb(251,119,143)"}} to={"/type"}>TYPE</NavLink>
                <NavLink className={styles.navlinks} activeStyle={{cursor:"pointer", color:"rgb(251,119,143)"}} to={"/collection"}>COLLECTION</NavLink>
            </div>
            <div>
                <NavLink to={"/search"}><img alt="logo" style={{width:"18px", marginLeft:"30px", marginTop:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XcVg1TF4ZO3uDrhhZgcUOr_ALySbh6zASw980QsYqswfA3v7VH9xvtQRch3w7n0PPqQ&usqp=CAU"/></NavLink>
                <NavLink to={"/search"}><img alt="logo" style={{width:"20px", marginLeft:"25px", marginTop:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5y2QWSVly3bz4hV-yy4g_EzeqijiuXBbxxfY9gsOVaWGbKyWhSScWD7rXX26u_0Gjhs&usqp=CAU"/></NavLink>
                <NavLink to={"/search"}><img alt="logo" style={{width:"30px", marginLeft:"20px", marginTop:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXouY94Ra0346CtuQGLlkA-uBwSlLzd1bsnGHecJdxjrgHggJZtF5h3KbhhInvyhbpDvg&usqp=CAU"/></NavLink>
                <NavLink to={"/cart"}><img alt="logo" style={{width:"26px", marginLeft:"20px", marginTop:"12px"}} src="data:image/png;base64,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"/></NavLink>
            </div>
        </div>
        //https://everstylish.com/pub/media/wysiwyg/slider/2.jpg
        //https://everstylish.com/pub/media/wysiwyg/slider/3.jpg
        //https://everstylish.com/pub/media/wysiwyg/slider/1.jpg
    )
}

export {Navbar}