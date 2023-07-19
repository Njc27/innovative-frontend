import React, {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate,} from "react-router-dom";
import './header.css';
import moment from 'moment/moment';

const Header = (props) => {

    const {blogData} = props;
  return (
    <>
        <div className='header_title'>
        <h1>{blogData?.title}</h1> 
        </div>

    <div className='header_container'>
    <div className='header_details'>
    <div className='publish_details'>
    <b>Published On:</b> <span className='dated'>{moment(blogData?.original_date).format('LL')}</span>
    </div>
    <div className='subtitle'>
        {blogData?.subtitle}
    </div>
    </div>
     <div className='blog_image'>
        <img src={blogData?.image_blog2020}/>
    </div>
    </div>
    <div className='h_line'>
    <hr></hr>
    </div>
    </>
  )
}

export default Header