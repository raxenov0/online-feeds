import React from "react";
import select from './MySelect.module.css'

const Selector = ({options, defaultValue, value, onChangeSort}) => {
    return(
        <select className={select.wrapper}
            value={value}
            onChange={event=>onChangeSort(event.target.value)}
        >

            <option disabled value="">
                {defaultValue}
            </option>
            {options.map(option=>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}
export default Selector