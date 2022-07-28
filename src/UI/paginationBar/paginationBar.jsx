import React from "react";
import { PaginationButton } from "../paginationButton/paginationButton";
import bar from './paginationBar.module.css'
import { Slider } from "../sliderButton/sliderButton";

export const PaginationBar = ({numberPage, countPage, setNumberPage})=>{
    let pagination = []
    for(let i = 0; i < countPage; i++){
    pagination.push(<PaginationButton key={i+1} numberPage={numberPage} currentPage={i+1} setNumPage={setNumberPage}>{i+1}</PaginationButton>)
  }

  function increment(){
    setNumberPage(numberPage+1)
    console.log('increament')
  }
  function decrement(){
    setNumberPage(numberPage-1)
    console.log('decreament')
  }

    return(
    <div className={bar.paginationBar}>
        <Slider decrement={decrement}/>
        {pagination}
        <Slider increment={increment}/>
    </div>  
    )
}