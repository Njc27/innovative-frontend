import React from 'react'
import './body.css'

const Body = (props) => {
    const {blogData} = props
  return (
    <>
    
    <div className='body_container'>
    <div className='body_text' dangerouslySetInnerHTML={{__html:blogData?.content}}></div>
    {/* <div className='main_content'>
    {blogData?.content}
    </div> */}
    </div>
    </>
  )
}

export default Body