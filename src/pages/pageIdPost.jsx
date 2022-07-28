import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import { usePost } from "../hooks/hookPost";
import PostService from "../API/postService";
import { Loader } from "../UI/loader/Loader";
import { PageByPost } from "../components/pageByPost/pageByPost";
import pageId from './../components/pageByPost/pageIdPost.module.css'

export const PageId = () => {
    const close = useNavigate()
    const [localState, setLocalState] = useState({})

    const id = useParams()

    const [fetching, isLoading, error] = usePost(async()=>{
            const response = await PostService.getDataForPost(id.id)
            setLocalState(response.data)
    })
    
    useEffect(()=>{
        fetching()
    },[])
    {
        return(isLoading
            ?   <div className={pageId.loader}>
                    <Loader/>
                </div>
             :<PageByPost localState={localState} close={close}/>)
    }
    
}