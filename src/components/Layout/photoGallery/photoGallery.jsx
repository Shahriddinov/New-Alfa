import React, {useState} from 'react'
import './photoGallery.scss';

import img1 from '../../../assets/images/aboutPageImgs/carouselImg1.png';
import img2 from '../../../assets/images/aboutPageImgs/carouselImg2.png';
import img3 from '../../../assets/images/aboutPageImgs/carouselImg3.png';
import img4 from '../../../assets/images/aboutPageImgs/carouselImg4.png';
import img5 from '../../../assets/images/aboutPageImgs/carouselImg5.png';
import img6 from '../../../assets/images/aboutPageImgs/carouselImg6.png';

import box from '../../../assets/images/box.png';

import leftArrow from '../../../assets/images/leftArrow.png';
import rightArrow from '../../../assets/images/rightArrow.png';

import { useTranslation } from 'react-i18next';

const PhotoGallery = () => {

    const {t} = useTranslation()

    const [x, setX] = useState(0);

    let arrContent = [ { url: img1}, {url: img2}, {url:img3}, {url:img4}, {url:img5}, {url:img6}]

    const goLeft = () => {
        x === 0 ? setX(0): setX(x + 70)    
    }

    const goRight = () => {
        x === -70*(arrContent.length - 1) ? setX(-70*(arrContent.length - 1)): setX(x - 70);
    }

  return (
    <div className='about-section-seven'>
        <div className='about-section-seven__wrapper'>
            <div className='about-section-seven__wrapper-right'>
                <img  src={box} alt="logo" />
                <h1>{t("aboutPage.photoGallery")}</h1>
            </div>
            <div className='about-section-seven__wrapper-left'>
                <button onClick={goLeft}><img src={leftArrow} alt="leftArrow" /></button>
                <button onClick={goRight} ><img src={rightArrow} alt="rightArrow" /></button>
            </div>
        </div>

        <div   className='about-section-seven__carouselImgContainer'>
            {arrContent.map( (item, index) => (
                <img  key={index} style={{transform : `translateX(${x}%)`}}  src={item.url} alt="carouselImgs" onDragStart={(e) => e.preventDefault()} />
            ))}
        </div>
    </div>
  )
}

export default PhotoGallery