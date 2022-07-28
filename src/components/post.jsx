import React from "react";
import './../App.css'
import { Element_posts } from "./element_posts/element_post";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Post = ({activeSearch, state, removePost}) => {
    if(activeSearch){
        if(state.current.length !== 0) {
            return(
                <TransitionGroup>
                    {state.current.map(e=>
                    <CSSTransition
                        key={e.id}
                        timeout={500}
                        classNames="item">
                            <Element_posts removePost={removePost} key={e.id} id={e.id} title={e.title} url={e.url} body={e.body}/>
                    </CSSTransition>)}
                </TransitionGroup>
            )} else {
                return(
                    <div style={{textAlign:'center',
                          fontSize:'30px'}}> Посты не найдены</div>
                )
            }
        } else {
        if(state.mutual.length !== 0) {
            return(
                <TransitionGroup>
                    {state.mutual.map(e=>
                    <CSSTransition
                        key={e.id}
                        timeout={500}
                        classNames="item">
                            <Element_posts removePost={removePost} key={e.id} id={e.id} title={e.title} url={e.url} body={e.body}/>
                    </CSSTransition>)}
                </TransitionGroup>
            )
        } else { 
            return(
                <div style={{textAlign:'center',
                      fontSize:'30px'}}> Посты не найдены</div>
            )
        }
    }
}
