import React from "react";
import { useState } from "react";
import counter from './counter.module.css'

export const Count = (props) => {
    return(
        <div className={counter.wrapper}>
            <button onClick={()=>props.functSetterM()} className={counter.btn}>-</button>
            <p>{props.likes}</p>
            <button onClick={()=>props.functSetterP()} className={counter.btn}>+</button>
        </div>
    )
}