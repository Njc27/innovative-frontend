import React from 'react'
import './footer.css'
import lines from '../../Assests/Frame.png';
import icon from '../../Assests/icon.png';
import icon1 from '../../Assests/icon1.png';
import icon2 from '../../Assests/icon2.png';
import icon3 from '../../Assests/icon3.png';
import icon4 from '../../Assests/icon4.png';
import wordmark_dark from '../../Assests/wordmark_dark.png';


const Footer = () => {
  return (
    <>
            <div className='firstContainer'>
                <div className='lineOne'>Made possibility through the generosity of:</div>
                <div className='nextLine'>
                    {/* <ul>
                        <li><b>The Burnes Center</b></li>
                        <li><b>For Social Change</b></li>
                        <li>Northeastern University</li>
                    </ul> */}
                    <img src={lines} alt='lines'/>
                </div>
            </div>

            <footer className='footer_container'>
            <div className='footer_box'>
            <div className='footer_icons'>
            <img src={icon1}/>
            <img src={icon2}/>
            {/* <div className='innovate_us'><img src={wordmark_dark}/></div> */}
            <div className='f_innovate_us'>
            <span className='f_innovate'>innovate</span>
            <span className='f_us'>(us)</span>
            </div>
            <img src={icon}/>
            <img src={icon4}/>
            </div>

            <div className='f_line'>
            <hr></hr>
            </div>
            
            <ul className='personalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Workshops</a></li>
            <li><a href="#">About Us</a></li>
      </ul>
      </div>
      </footer>
             
    </>
  )
}

export default Footer