import React from "react";
import create from './createPost.module.css'

export const CreatePost = ({Children,setterBtn,logOut,...props}) => {
    
    return(
        <div {...props} onClick={()=> {
            try{
                setterBtn()
            } catch{
                logOut(false)
                localStorage.removeItem('auth')
            }
            }}
         className={create.wrapper}>
            <p>{props.children}</p>
        </div>
    )
    }