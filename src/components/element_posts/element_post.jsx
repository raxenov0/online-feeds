import React from "react";
import element from './element_post.module.css'

import {useNavigate} from 'react-router-dom'


export let Element_posts = (props) => {
    const url = useNavigate()
    return(
        <div className={element.wrapper}>
            <img src={"https://focastock.com/wp-content/uploads/2022/05/P104088820220504.jpg"} className={element.images} />
            <div className={element.post}>
               <p>{props.title}</p>
                <span>
                    {props.body}
                </span>
            </div>

            <button  className={element.remove}
                onClick={()=>{
                    url(`/post/${props.id}`)
                }}
                
            >Open</button>

            <button  className={element.remove} onClick={()=>{
                props.removePost({
                    id:props.id,
                    title:props.title,
                    body:props.body,
                    url:props.url
                    })
                }}>Delete</button>

        </div>
    )
}