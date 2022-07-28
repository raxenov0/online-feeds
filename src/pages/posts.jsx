import './../App.css';
import Header from './../components/header/header'
import PostService from './../API/postService';
import { PaginationButton } from './../UI/paginationButton/paginationButton';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CreatePost } from '../components/createPost/createPost';
import { Window_create } from '../components/window_create/window_create';
import { Post } from './../components/post';
import { Loader } from './../UI/loader/Loader';
import { usePost } from './../hooks/hookPost';
import { Selects } from './../components/selects/selects';
import { Navigation } from '../components/navigation/navigation';
import { AuthContext } from '../context';
import { PaginationBar } from '../UI/paginationBar/paginationBar';
// import { CSSTransition, TransitionGroup } from "react-transition-group";


function Posts() {

  const {isAuth, setIsAuth} = useContext(AuthContext)

  let [state, setState] = useState({mutual:[], current:[]})
  let [searchQuery, setSearchQuery] = useState('')
  let [selectSort, setSelectSort] = useState('')
  let [interfaces, setInterfaces] = useState({btn:false, activeSearch:false})
  let [countPosts , setCountPosts] = useState()
  let [numberPage, setNumberPage] =useState(1)
  let [countPage, setCountPage] = useState(1)
  let [selectLimitPost, setSelectLimitPost] = useState(10)

  let createPost = (object) => {
    setState({...state,mutual:[...state.mutual,object]})
  }
  let removePost = (object_) => {
    setState({current:state.current.filter(e=>e.id !== object_.id),mutual:state.mutual.filter(e=>e.id !== object_.id)})
  }
  //
  let newSorted = () =>{
    setState({...state,current:state.mutual.filter(e=>{
      return(e.title.toLowerCase().includes(searchQuery.toLowerCase()))
      })
    })
  }
  //
  
  //
  const sortedPostsMethod = useMemo(()=>{
     if(selectSort){
      return {...state, mutual:state.mutual.sort((a,b)=>a[selectSort].localeCompare(b[selectSort]))}
    } 
    return {...state}
  }, [selectSort,state])
  //
  let setterBtn = () => setInterfaces({...interfaces,btn:!interfaces.btn})
  let setterActiveSearch = (response) => setInterfaces({...interfaces, activeSearch:response})
  //

  let [fetching, isLoading, error] = usePost(async()=>{
    const response = await PostService.getPosts(selectLimitPost,numberPage)
    setCountPosts(response.headers["x-total-count"])
    setCountPage(Math.ceil(countPosts/selectLimitPost))
    setState({...state,mutual:response.data})
  })

  useEffect(()=>{
    fetching()
  }, [numberPage, countPosts, selectLimitPost, countPage])
  //

  let pagination = []
  for(let i = 0; i < countPage; i++){
    pagination.push(<PaginationButton key={i+1} numberPage={numberPage} currentPage={i+1} setNumPage={setNumberPage}>{i+1}</PaginationButton>)
  }

  return (
    
    <div className="App">
      <div className="elements">
        <Header setterActiveSearch={setterActiveSearch} newSorted={newSorted} editWords={setSearchQuery}/>
        {!interfaces.btn?<CreatePost setterBtn={setterBtn} >Add post</CreatePost>:null}
        <CreatePost logOut={setIsAuth}> Log out</CreatePost>
      </div>
      <div className="wrapper_for_posts">
        <hr style={{width:'80%', margin:'50px auto'}} />
        {!interfaces.activeSearch
        ? 
          <Selects onChangeLimit={setSelectLimitPost} onChangeSort={setSelectSort}/>
        : null}

        {isLoading? <Loader/>:<Post activeSearch={interfaces.activeSearch} state={sortedPostsMethod} removePost={removePost}/>}
        {error&&<div style={{margin:'30px auto', fontSize:'36px', color:'red', fontWeight:'600'}}>Invalid Error!</div>}
      </div>
      
      {interfaces.btn
      ? 
        <Window_create createPost={createPost} setterBtn={setterBtn} />
      : null}
      <div className="pagination">
        <PaginationBar numberPage={numberPage} countPage={countPage} setNumberPage={setNumberPage} />
      </div>
    </div>
  );
}

export default Posts;