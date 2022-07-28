import React from "react";
import slider from './sliderButton.module.css'

export const Slider = ({increment, decrement}) => {
    return(
        <div class={slider.btn} onClick={()=>{
            try{
                increment()
            } catch{
                decrement()
            }
        }
        }>
            <div></div>
        </div>
    )
}