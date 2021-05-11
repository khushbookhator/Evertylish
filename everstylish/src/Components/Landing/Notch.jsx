import React from "react"

function Notch(){
    return(
        <div style={{
            display:"flex",
            gap:"15px",
            background:"rgb(246,246,248)",
            height:"30px",
            alignItems:"center",
            color:"rgb(135,135,135)"
        }}>
            <p><img style={{marginLeft:"80px"}} src="https://tse1.mm.bing.net/th?id=OIP.7fL5elcOjrFWloTpuGwOxgHaHa&pid=Api&P=0&w=300&h=300" width="25px" alt="call"/></p>
            <p>8910482610</p>
            <p><img style={{marginLeft:"80px"}} src="https://tse3.mm.bing.net/th?id=OIP.3kziv_vX0pxpJRaHt1WB6wHaHa&pid=Api&P=0&w=300&h=300" width="25px" alt="logo"/></p>
            <p>care@tinytrinkets.com</p>
        </div>
    )
}

export {Notch}