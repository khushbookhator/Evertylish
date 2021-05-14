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
            <p><img style={{marginLeft:"80px"}} src="data:image/png;base64,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" width="20px" alt="call"/></p>
            <p>8910482610</p>
            <p><img style={{marginLeft:"80px"}} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/mail-2031009-1714869.png" width="25px" alt="logo"/></p>
            <p>care@tinytrinkets.com</p>
        </div>
    )
}

export {Notch}