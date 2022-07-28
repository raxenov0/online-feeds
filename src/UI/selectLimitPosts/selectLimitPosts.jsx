import React from "react";
import limit from './selectLimitPosts.module.css'

export const SelectLimitPosts = ({options, onChangeLimit}) =>{
    return(
        <select  className={limit.wrapper}
        value={options.name}
        onChange={(e)=>onChangeLimit(e.target.value)}
    >
        <option disabled value="">
            Posts
        </option>
        {options.map(option=>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        )}
    </select>
    )
}