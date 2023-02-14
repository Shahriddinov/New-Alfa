import React, { useState } from 'react';
import './about.scss';
import History from '../../components/Layout/History/History';


import box from '../../assets/images/box.png';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';
// section 6 images
import lukoil from '../../assets/images/aboutPageImgs/lukoil.svg';
import intel from '../../assets/images/aboutPageImgs/intel.svg';
import ikea from '../../assets/images/aboutPageImgs/ikea.svg';



// section 7 carousel imgs
import img1 from '../../assets/images/aboutPageImgs/carouselImg1.png';
import img2 from '../../assets/images/aboutPageImgs/carouselImg2.png';
import img3 from '../../assets/images/aboutPageImgs/carouselImg1.png';
import img4 from '../../assets/images/aboutPageImgs/carouselImg2.png';

const About = () => {

    const [x, setX] = useState(0);

    let arrContent = [ { url: img1}, {url: img2}, {url:img3}, {url:img4}]

    const goLeft = () => {
        x === 0 ? setX(0): setX(x + 70)    
    }

    const goRight = () => {
        x === -70*(arrContent.length - 1) ? setX(-70*(arrContent.length - 1)): setX(x - 70);
    }

    const touchHandler = (e) => {
        console.log(e)
    }






  return (
    <div className='about-section'>
        <div className='about-section-one'>
            one
        </div>

        <div className='about-section-two'>
            two
        </div>

        <div className='about-section-three'>
            three
        </div>

        <div className='about-section-four'>
            four
        </div>

        <div className='about-section-five'>
            five
        </div>

        {/* section six////////// */}

        <div className='about-section-six'>
            <div className='about-section-six__slide-track'>
                <div className='about-section-six__slide-track-slide'>
                    <img src={lukoil} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={intel} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={ikea} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={lukoil} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={intel} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={ikea} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={lukoil} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={intel} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={ikea} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={lukoil} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={intel} alt="intel" />
                </div>
                <div className='about-section-six_  _slide-track-slide'>
                    <img src={ikea} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={lukoil} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={intel} alt="intel" />
                </div>
                <div className='about-section-six__slide-track-slide'>
                    <img src={ikea} alt="intel" />
                </div>
            </div>
        </div>


        {/* section seven */}

        <div className='about-section-seven'>
            <div className='about-section-seven__wrapper'>
                <div className='about-section-seven__wrapper-right'>
                    <img  src={box} alt="logo" />
                    <h1>Фотогалерея</h1>
                </div>
                <div className='about-section-seven__wrapper-left'>
                    <button onClick={goLeft}><img src={leftArrow} alt="leftArrow" /></button>
                    <button onClick={goRight} ><img src={rightArrow} alt="rightArrow" /></button>
                </div>
            </div>

            <div className='about-section-seven__carouselImgContainer'>
                {arrContent.map( (item, index) => (
                    <img onTouchStart={touchHandler}  key={index} style={{transform : `translateX(${x}%)`}}  src={item.url} alt="carouselImgs" />
                ))}
            </div>
        </div>

        <History/>
    </div>
  )
}

export default About