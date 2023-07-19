import logo from './logo.svg';
import './App.css'
import Home from './Components/Home';
import Header from './Components/Header/header';

import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getBlogData } from './redux/actions/blogAction';
import Body from './Components/Body/body';
import Footer from './Components/Footer/footer';
import Nav from './Components/Nav/nav';



function App() {
  const dispatch = useDispatch();

    const {blogData} = useSelector(state=>state.blog);
    console.log(blogData);

    useEffect(()=>{
        dispatch(getBlogData());
    },[])
  return (
    <>
    <Nav/>
    <div className='main-body'>
    <Header blogData={blogData}/>
    <Body blogData={blogData}/>
    </div>
        <Footer/>
    </>


    

  );
}

export default App;
