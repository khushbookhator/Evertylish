import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"

function Slide() {
    let settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false
    };

    return(
        <Wrapper>
            <Slider {...settings}>
                <img src="https://everstylish.com/pub/media/wysiwyg/slider/1.jpg" alt=""/>
                <img src="https://everstylish.com/pub/media/wysiwyg/slider/2.jpg" alt=""/>
                <img src="https://everstylish.com/pub/media/wysiwyg/slider/3.jpg" alt=""/>
            </Slider>
        </Wrapper>
    )
}

export {Slide}

const Wrapper = styled.div`
    .slick-arrow{
        margin: 0px 48px;
        background-color: transparent;
        z-index: 100;
    }
`