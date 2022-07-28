import React from "react";
import pagination from './paginationButton.module.css'

export const PaginationButton = ({children,setNumPage,numberPage, currentPage}) =>{
    return(
        <button style={{background:numberPage==currentPage?'rgb(231 193 7)':''}} className={pagination.wrapper} onClick={()=>setNumPage(currentPage)}>
            {children}
        </button>
    )
}