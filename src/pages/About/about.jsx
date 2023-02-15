import React, { useState } from 'react';
import './about.scss';
import History from '../../components/Layout/History/History';
import PhotoGallery from '../../components/Layout/photoGallery/photoGallery';




import softLogo from '../../assets/images/softLogo.png';
import mirrorLogo from '../../assets/images/aboutPageImgs/mirrorLogo.png';
import logo from '../../assets/images/logo.svg'
// section three imges
import engi from '../../assets/images/aboutPageImgs/eng.svg';
import maint from '../../assets/images/aboutPageImgs/maint.svg';
import cater from '../../assets/images/aboutPageImgs/cater.svg';
import shipping from '../../assets/images/aboutPageImgs/shipping.svg'; 
import rect from '../../assets/images/aboutPageImgs/rect.svg';

// section four employees
import emp1 from '../../assets/images/aboutPageImgs/emp1.png';
import emp2 from '../../assets/images/aboutPageImgs/emp2.png';
import emp3 from '../../assets/images/aboutPageImgs/emp3.png';
import emp4 from '../../assets/images/aboutPageImgs/emp4.png';


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

    // const [touch, setTouch] = useState({
    //     index: 0,
    //     length: 0,
    //     slider: null,
    //     sliderContainer: null,
    //     width: 0,
        
    //     swiping: false,
    //     startPosition: 0,
    //     currentTranslate: 0,
    //     prevTranslate: 0,
    //     animationId : 0,
    //     currentIndex: 0,
    // })



    window.oncontextmenu = (e) => {
        e.preventDefault();
        e.stopPropagation()
        return false
    } 




    let employeesContent = [ 
        { url: emp1, name: 'Darobov Baxodirmirzo', jobTitle: 'Директор'}, 
        { url: emp2, name: 'Darobov Baxodirmirzo', jobTitle: 'Менеджер'},  
        { url: emp3, name: 'Darobov Baxodirmirzo', jobTitle: 'Бухгалтер'}, 
        { url: emp4, name: 'Darobov Baxodirmirzo', jobTitle: 'Ux Ui designer'}, 
        { url: emp3, name: 'Darobov Baxodirmirzo', jobTitle: 'Бухгалтер'}, 
        { url: emp4, name: 'Darobov Baxodirmirzo', jobTitle: 'Бухгалтер'}, 
        { url: emp3, name: 'Darobov Baxodirmirzo', jobTitle: 'Ux Ui designer'}, 
    ]

    const goLeft = () => {
        x === 0 ? setX(0): setX(x + 70)    
    }

    const goRight = () => {
        x === -70*(employeesContent.length - 1) ? setX(-70*(employeesContent.length - 1)): setX(x - 70);
    }




    // const touchStartHandler = (e, index) => {
    //     // if(e.touches.length !== 1) return

    //     // // if(!e.target.matches(<img/>)) return

    //     setTouch( current => {
    //         return {...current, startPosition: e.touches[0].clientX, swiping: true, currentIndex: index, animationId: requestAnimationFrame(animation)}
    //     })


    // }
    // const touchMoveHandler = (e) => {
    //     // if(e.touches.length !== 1) return
    //     if(touch.swiping) return

    //     setTouch( prev => {
    //         return {...prev, currentTranslate: touch.prevTranslate + e.touches[0].clientX - touch.startPosition }
    //     })
    // }


    // const touchEndHandler = (e) => {
    //     setTouch( prev => {
    //         return {...prev, swiping: false}
    //     })
    //     const movedBy = touch.currentTranslate - touch.prevTranslate;
    //     if(movedBy < -100 && touch.currentIndex < arrContent.length - 1) {
    //         setTouch(prev => {
    //             return {...prev, currentIndex: prev.currentIndex + 1}
    //         })
    //     }
    //     if(movedBy > 100 && touch.currentIndex > 0) {
    //         setTouch(prev => {
    //             return {...prev, currentIndex: prev.currentIndex - 1}
    //         })
    //     }
    //     cancelAnimationFrame(touch.animationId)
    //     // // console.log(e.touches)
    // }

    // const slider = document.querySelector(`.mobileSlide`);

    // const animation = () => {
    //     setSliderPosition()
    //     if(touch.swiping){
    //         requestAnimationFrame(animation)
    //     }
    // } 

    // const setSliderPosition = () => {
    //     slider.style.transform = `translateX(${touch.currentTranslate}px)`
    // }

    // const setPositionByIndex = () => {
    //     touch.currentTranslate = touch.currentIndex * - window.innerWidth;
    //     touch.prevTranslate = touch.currentTranslate;
    //     setSliderPosition()

    // }
    // className='mobileSlide'  onTouchStart={(e) => touchStartHandler(e, index)} onTouchMove={touchMoveHandler} onTouchEnd={touchEndHandler}  




  return (
    <div className='about-section'>
        <div className='about-section-container'>
            <div className='about-section-container-one'>
                <div className='about-section-container-one__wrapper'>
                    <img src={softLogo} alt="softLogo" />
                    <h1>Профиль компании</h1>
                </div>
                <p>Компания Альфа бест —оператор комплексного обслуживания вахтовых поселков на территории Республики Узбекистан Глубокие знания, разносторонний опыт и профессионализм наших сотрудников — это гарантия успехов во всех сферах деятельности, которыми занимается компания.. Наши задачи — обеспечить сервис высокого качества , снизить издержки, дать необходимый комфорт.</p>
            </div>

            <div className='about-section-container-two'>
                <div className='about-section-container-two__leftWrapper'>
                    <img src={box} alt="logo" />
                    <h1>Наша миссия</h1>
                    <p>Альфабест — предлагает комплексные решения по содержанию, клинингу, эксплуатации и техническому обслуживанию промышленных предприятий, объектов общественного питания, торговых и бизнес-центров, складских комплексов и технопарков. Мы поддерживаем высокие стандарты обслуживания и внедряем инновационные решения, применяя современные природосберегающие технологии.</p>

                </div>
                <div className='about-section-container-two__rightWrapper'>
                    <h1><span>ALFABEST</span> <br/>ЕДИНЫЙ СЕРВИС НАЦИОНАЛЬНОГО МАСШТАБА</h1>
                </div>
                <img src={mirrorLogo} alt="mirrorLogo" />
            </div>  

            <div className='about-section-container-three'>
                <div className='about-section-container-three--container'>
                    <div className='about-section-container-three--container__wrapper'>
                        <h1>Инженерно-техническая эксплуатация</h1>
                        <a href="/">Подробно <img src={rightArrow} alt="arrow" /></a>
                        <img className='about-section-container-three--container__wrapper-img' src={engi} alt="engineering" />
                        {/* <img className='about-section-three--container__wrapper-rect' src={rect} alt="rect" /> */}
                    </div>
                    <div className='about-section-container-three--container__wrapper'>
                        <h1>Сервисное и бытовое обслуживание</h1>
                        <a href="/">Подробно <img src={rightArrow} alt="arrow" /></a>
                        <img className='about-section-container-three--container__wrapper-img' src={maint} alt="maintanance" />
                        {/* <img className='about-section-three--container__wrapper-rect' src={rect} alt="rect" /> */}
                    </div>
                    <div className='about-section-container-three--container__wrapper'>
                        <h1>Корпоративное <br/> питание</h1>
                        <a href="/">Подробно <img src={rightArrow} alt="arrow" /></a>
                        <img className='about-section-container-three--container__wrapper-img' src={cater} alt="catering" />
                        {/* <img className='about-section-three--container__wrapper-rect' src={rect} alt="rect" /> */}
                    </div>
                    <div className='about-section-container-three--container__wrapper'>
                        <h1>Транспортные и пассажирский перевозки</h1>
                        <a href="/">Подробно <img src={rightArrow} alt="arrow" /></a>
                        <img className='about-section-container-three--container__wrapper-img' src={shipping} alt="shipping" />
                        {/* <img className='about-section-three--container__wrapper-rect' src={rect} alt="rect" /> */}
                    </div>
                </div>
            </div>

            <div className='about-section-container-four'>
                <div className='about-section-container-four__wrapper'>
                    <div className='about-section-container-four__wrapper-right'>
                        <img  src={box} alt="logo" />
                        <h1>Наша команда</h1>
                    </div>
                    <div className='about-section-container-four__wrapper-left'>
                        <button onClick={goLeft}><img src={leftArrow} alt="leftArrow" /></button>
                        <button onClick={goRight} ><img src={rightArrow} alt="rightArrow" /></button>
                    </div>
                </div>

                <div   className='about-section-container-four__carouselImgContainer'>
                    {employeesContent.map( (obj, index) => (
                        <div key={index} className='about-section-container-four__carouselImgContainer-wrapper' style={{transform : `translateX(${x}%)`}}>
                            <img src={obj.url} alt="carouselImgs" onDragStart={(e) => e.preventDefault()} />
                            <h1>{obj.name}</h1>
                            <p>{obj.jobTitle}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>



        <div className='about-section-five'>
            <div className="about-section-five__image"></div>
            <div className="about-section-five__wrapper">
                <img src={logo} alt="logo" />
                <h1>Мы с нашими партнерами уже пять лет</h1>
                <div className="about-section-five__wrapper__horizontalLine"></div>
                <p>Мы успешно работаем с нашими партнерами уже пять лет. Теперь у нас более 10 клиентов, и вы также можете сотрудничать с нами.</p>
            </div>
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
                <div onPointeru className='about-section-six__slide-track-slide'>
                    <img src={ikea} alt="intel" />
                </div>
            </div>
        </div>


        {/* section seven */}

        {/* <div className='about-section-seven'>
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

            <div   className='about-section-seven__carouselImgContainer'>
                {arrContent.map( (item, index) => (
                    <img  key={index} style={{transform : `translateX(${x}%)`}}  src={item.url} alt="carouselImgs" onDragStart={(e) => e.preventDefault()} />
                ))}
            </div>
        </div> */}
        
        <PhotoGallery />
        <History/>
    </div>
  )
}

export default About