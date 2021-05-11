import React from "react"
import {NavLink} from "react-router-dom"
import styles from "./trinket.module.css"

function Navbar(){
    return(
        <div style={{
            display:"flex",
            height:"60px",
            position:"sticky"
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
                <NavLink to={"/search"}><img alt="logo" style={{width:"26px", marginLeft:"30px", marginTop:"10px"}} src="https://img.icons8.com/ios/72/search--v1.png"/></NavLink>
                <NavLink to={"/search"}><img alt="logo" style={{width:"30px", marginLeft:"30px", marginTop:"10px"}} src="https://img.icons8.com/ios-glyphs/2x/change-user-male.png"/></NavLink>
                <NavLink to={"/search"}><img alt="logo" style={{width:"30px", marginLeft:"30px", marginTop:"10px"}} src="https://img.icons8.com/material-outlined/2x/filled-like.png"/></NavLink>
                <NavLink to={"/search"}><img alt="logo" style={{width:"30px", marginLeft:"30px", marginTop:"10px"}} src="https://img.icons8.com/pastel-glyph/2x/shopping-bag--v3.png"/></NavLink>
            </div>
        </div>
        //https://everstylish.com/pub/media/wysiwyg/slider/2.jpg
        //https://everstylish.com/pub/media/wysiwyg/slider/3.jpg
        //https://everstylish.com/pub/media/wysiwyg/slider/1.jpg
    )
}

export {Navbar}