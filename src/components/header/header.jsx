import React from "react";
import './header.css'

const Header = ({editWords,newSorted,setterActiveSearch}) =>{
    
    return(
        <form className='form_search'>
                <div className='group_search'>      
                    <input className='input_search' onChange={(e)=>{
                        editWords(e.target.value)
                        if(e.target.value == '') setterActiveSearch(false)
                    }
                    } type="text" 
                    
                    required/>
                    <span className='highlight'></span>
                    <span className='bar'></span>
                    <label className='label_search'>Search </label>
                </div>
            
                <div className='btn'
                    onClick={()=>{
                    setterActiveSearch(true)
                    newSorted()
                    }
                }
                >
                    <span className='noselect'>Search</span>
                    <div className='circle'></div>
                </div>
        </form>
    )
   
        
   
    
}
export default Header