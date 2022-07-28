import React, { useState } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import window from './window_create.module.css'
import './../../App.css'

export const Window_create = ({Children,setterCreate,setterBtn,createPost,...props}) => {


    let [inputData, setInputData] = useState({title:'', body:'', url:"https://focastock.com/wp-content/uploads/2022/05/P104088820220504.jpg", id:0})

    function checkInput(){
        if(inputData.name == '' || inputData.text == '') return null
        else {
            setterBtn();
            createPost(inputData)
        }
    }
    return(
            <form>
                <div className={[window.fullWindow,'create_'].join(' ')}  onClick={()=> setterBtn()}>
                    <div className={window.wrapper} onClick={(event)=> event.stopPropagation()}>
                        <span className={window.header}>NEW POST</span>
                        <div className={window.inputTitle}>
                            <p>Title</p>
                            <input type="text" id="title" className={window.input} placeholder="Enter title" onChange={(e)=>setInputData({...inputData, title : e.target.value})}  />
                        </div>
                        <div className={window.inputBody}>
                            <p>Body</p>
                            <textarea type="body" id="body" className={[window.inputText, window.input].join(' ')} placeholder="Enter text" onChange={(e)=>setInputData({...inputData, body : e.target.value, id:parseInt(Math.random()*1000)})}  />
                        </div>
                        <button className={window.button} onClick={()=>{checkInput()}}>
                            <p>Create</p>
                        </button>
                    </div>
                </div>
            </form>
    )
}