import React, { useEffect, useState } from "react"

function Slide() {

    const sliders = [
        "https://everstylish.com/pub/media/wysiwyg/slider/1.jpg",
        "https://everstylish.com/pub/media/wysiwyg/slider/2.jpg",
        "https://everstylish.com/pub/media/wysiwyg/slider/3.jpg"
    ]
    const [slids, setSlids] = useState(0)
    useEffect(() => {
        let x = setInterval(() => {
            if(slids === 2){
                setSlids(pre => pre=0)
            }else if(slids < 2){
                setSlids(pre => pre+1)
            }
        },5000)
        return(() => clearInterval(x))
    },[slids])

    return(
        <div>
            <img width="100%" src={sliders[slids]} alt="sliding"/>
        </div>
    )
}

export {Slide}