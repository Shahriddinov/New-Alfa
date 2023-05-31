import React from "react";
import './home.scss';

import NewHistory from '../../components/Layout/newHistory/newHistory';

import cheff from '../../assets/images/cheff.png';
import box from '../../assets/images/box.png';
import jobs from '../../assets/images/jobs.svg';
import map from '../../assets/images/map.svg';
import place from '../../assets/images/place.svg';
import triers from '../../assets/images/triers.svg';
import colligues1 from '../../assets/images/collegues1.png';
import colligues2 from '../../assets/images/collegues2.png';
import colligues3 from '../../assets/images/collegues3.png';
import colligues4 from '../../assets/images/collegues4.png';
import logo from '../../assets/images/logo.svg';
import softLogo from '../../assets/images/softLogo.png';


import img1 from '../../assets/images/waiter4x.png';
import img2 from '../../assets/images/img4x2.png';
import img3 from '../../assets/images/img4x3.png'
import img4 from '../../assets/images/img4x4.png';
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';





const Home = ()=>{

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const { t } = useTranslation();

    const slides = [
        {id: 1, url: img1},
        {id: 2, url: img2},
        {id: 3, url: img3},
        {id: 4, url: img4}
    ]

    // const goToPrevious = () => {
    //     const isFirstSlide = currentSlideIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length - 1: currentSlideIndex - 1;
    //     setCurrentSlideIndex(newIndex) 
    // }

    // const goToNext = () => {
    //     const islastSlide = currentSlideIndex === slides.length - 1;
    //     const newIndex = islastSlide ? 0 : currentSlideIndex + 1;
    //     setCurrentSlideIndex(newIndex) 
    // }

    useEffect(() => {
        const interval = setInterval(() => {
                const islastSlide = currentSlideIndex === slides.length - 1;
                const newIndex = islastSlide ? 0 : currentSlideIndex + 1;
                setCurrentSlideIndex(newIndex) 
        }, 5000);


        return () => clearInterval(interval)
    },[currentSlideIndex])

    const goToSlide = (slideIndex) => {
        setCurrentSlideIndex(slideIndex)
    }

    const activeStyle = (slideIndex) => {
        if(slideIndex === currentSlideIndex) {
            return 'section-zero__dotsContainer-dots active'
        }
        return 'section-zero__dotsContainer-dots'
    }

   

return(
    <div className="section">

        <div className="section-zero">
            {/* <div className="section-zero__image"></div> */}
            <div className="section-zero__imageCaorusel" style={{backgroundImage: `url(${slides[currentSlideIndex].url})`}}></div>
            <div className="section-zero__dotsContainer">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className={activeStyle(slideIndex)}  onClick={() => goToSlide(slideIndex)} ></div>
                ))}
            </div>
            <div className="section-zero__wrapper">
                <img src={softLogo} alt="logo" />
                <h1>{t("homePage.catering")}</h1> 
                <button>{t("homePage.more")}</button>     
            </div>
        </div>

        <div className="section-sections">
            <div className="section-sections-one">
                <img className="section-sections-one__image" src={cheff} alt="cheffImage" />
                <div className="section-sections-one__wrapper">
                    <img className="section-sections-one__img2" src={box} alt="box" />
                    <h1 className="section-sections-one__heading">{t("homePage.about")}</h1>
                    <p className="section-sections-one__text">{t("homePage.company")}</p>
                    <button className="section-sections-one__btn">{t("homePage.more")}</button>
                </div>
            </div>


            <div className="section-sections-two">
                <div className="section-sections-two__wrapper">
                    <div className="section-sections-two__wrapper-inner">
                        <img src={map} alt="map" />
                        <p>+320.000 <span>{t("homePage.space")}</span></p>
                    </div>
                    <p>{t("homePage.place")}<br/> {t("homePage.improvement")}</p>
                </div>
                <div className="section-sections-two__wrapper">
                    <div  className="section-sections-two__wrapper-inner">
                        <img src={place} alt="place" />
                        <p>+70.000 <span>{t("homePage.space")}</span></p>
                    </div>
                    <p>{t("homePage.place")} <br/> {t("homePage.cleaning")}</p>
                </div>
                <div className="section-sections-two__wrapper">
                    <div  className="section-sections-two__wrapper-inner">
                        <img src={triers} alt="triers" />
                        <p>+1000</p>
                    </div>
                    <p>{t("homePage.eating")}</p>
                </div>
                <div className="section-sections-two__wrapper">
                    <div  className="section-sections-two__wrapper-inner">
                        <img src={jobs} alt="jobs" />
                        <p>+500</p>
                    </div>
                    <p>{t("homePage.employees")}</p>
                </div>
            </div>


            <div className="section-sections-three">
                <div className="section-sections-three-left">
                    <img src={box} alt="box" />
                    <h1>{t("homePage.our")} <span>{t("homePage.aim")}</span></h1>
                    <p>{t("homePage.aboutAlfa")}</p>
                </div>

                <div className="section-sections-three-right">
                    <div className="section-sections-three-right__wrapper">
                        <span>01</span>
                        <p>{t("homePage.costReduction")}</p>
                        <img src={colligues1} alt="colligues" />
                    </div>
                    <div className="section-sections-three-right__horizontalLine"></div>

                    <div className="section-sections-three-right__wrapper">
                        <span>02</span>
                        <p>{t("homePage.improvingQuality")} </p>
                        <img src={colligues2} alt="colligues" />
                    </div>
                    <div className="section-sections-three-right__horizontalLine"></div>

                    <div className="section-sections-three-right__wrapper">
                        <span>03</span>
                        <p>{t("homePage.effort")}</p>
                        <img src={colligues3} alt="colligues" />
                    </div>
                    <div className="section-sections-three-right__horizontalLine"></div>

                    <div className="section-sections-three-right__wrapper">
                        <span>04</span>
                        <p>{t("homePage.menuServices")}</p>
                        <img src={colligues4} alt="colligues" />
                    </div>
                    <div className="section-sections-three-right__horizontalLine"></div>
                    
                </div>
            </div>

        </div>



        <div className="section-four">
            <div className="section-four__image"></div>
            <div className="section-four__wrapper">
                <img src={logo} alt="logo" />
                <h1>{t("homePage.partners")}</h1>
                <div className="section-four__wrapper__horizontalLine"></div>
                <p>{t("homePage.becomePartner")}</p>
            </div>
        </div>



        <NewHistory />


    </div>
)

}

export default Home;