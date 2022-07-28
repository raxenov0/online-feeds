import React from "react";
import pageId from "./pageIdPost.module.css";

export const PageByPost = ({close, localState}) =>{
    return(
        <div className={pageId.wrapper} onClick={()=>close(-1)}>
            <div className={pageId.content} onClick={(event)=>{
                event.stopPropagation()
                close(-1)
            }}>
                <button className={pageId.close}></button>
                <div className={pageId.title}>
                    <p>Header</p>
                    <span>{`"${localState.title}"`}</span>
                </div>
                <div className={pageId.body}>
                    <p>Text:</p>
                    <span>{`"${localState.body}"`}</span>
                </div>
            </div>
        </div>
    )
}