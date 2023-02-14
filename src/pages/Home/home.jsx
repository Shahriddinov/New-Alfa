import React from "react";
import './home.scss';

import History from '../../components/Layout/History/History';

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





const Home = ()=>{
return(
    <div className="section">

        <div className="section-one">
            <img className="section-one__image" src={cheff} alt="cheffImage" />
            <div className="section-one__wrapper">
                <img className="section-one__img2" src={box} alt="box" />
                <h1 className="section-one__heading">о нашей компании</h1>
                <p className="section-one__text">Компания Альфа бест —оператор комплексного обслуживания вахтовых поселков на территории Республики Узбекистан Глубокие знания, разносторонний опыт и профессионализм наших сотрудников — это гарантия успехов во всех сферах деятельности, которыми занимается компания.. Наши задачи — обеспечить сервис высокого качества , снизить издержки, дать необходимый комфорт. Основным заказчиком услуг Компании на протяжении пяти лет является ПАО ЛУКойл что само по себе говорит о качестве наших услуг</p>
                <button className="section-one__btn">Узнать больше</button>
            </div>
        </div>


        <div className="section-two">
            <div className="section-two__wrapper">
                <div className="section-two__wrapper-inner">
                    <img src={map} alt="map" />
                    <p>+320.000 <span>кв.м²</span></p>
                </div>
                <p>Площади объектов <br/> благоустройства</p>
            </div>
            <div className="section-two__wrapper">
                <div  className="section-two__wrapper-inner">
                    <img src={place} alt="place" />
                    <p>+70.000 <span>кв.м²</span></p>
                </div>
                <p>Площади объектов <br/> клининга</p>
            </div>
            <div className="section-two__wrapper">
                <div  className="section-two__wrapper-inner">
                    <img src={triers} alt="triers" />
                    <p>+1000</p>
                </div>
                <p>Питающихся</p>
            </div>
            <div className="section-two__wrapper">
                <div  className="section-two__wrapper-inner">
                    <img src={jobs} alt="jobs" />
                    <p>+500</p>
                </div>
                <p>Сотрудников</p>
            </div>
        </div>


        <div className="section-three">
            <div className="section-three-left">
                <img src={box} alt="box" />
                <h1>Наша <span>цель</span></h1>
                <p>Альфабест — предлагает комплексные решения по содержанию, клинингу, эксплуатации и техническому обслуживанию промышленных предприятий, объектов общественного питания, торговых и бизнес-центров, складских комплексов и технопарков. Мы поддерживаем высокие стандарты обслуживания и внедряем инновационные решения, применяя современные природосберегающие технологии.</p>
            </div>

            <div className="section-three-right">
                <div className="section-three-right__wrapper">
                    <span>01</span>
                    <p>Сокращение издержек за счет оптимизации процессов</p>
                    <img src={colligues1} alt="colligues" />
                </div>
                <div className="section-three-right__horizontalLine"></div>

                <div className="section-three-right__wrapper">
                    <span>02</span>
                    <p>Улучшение качества услуг за счет привлечения </p>
                    <img src={colligues2} alt="colligues" />
                </div>
                <div className="section-three-right__horizontalLine"></div>

                <div className="section-three-right__wrapper">
                    <span>03</span>
                    <p>Концентрация усилий управленческой команды на основной деятельности</p>
                    <img src={colligues3} alt="colligues" />
                </div>
                <div className="section-three-right__horizontalLine"></div>

                <div className="section-three-right__wrapper">
                    <span>04</span>
                    <p>Адаптированные под ваши потребности меню и услуги Основные этапы заключения договора</p>
                    <img src={colligues4} alt="colligues" />
                </div>
                <div className="section-three-right__horizontalLine"></div>
                
            </div>
        </div>


        <div className="section-four">
            <div className="section-four__image"></div>
            <div className="section-four__wrapper">
                <img src={logo} alt="logo" />
                <h1>Наши партнеры довольны нами</h1>
                <div className="section-four__wrapper__horizontalLine"></div>
                <p>Если вас заинтересовали наши услуги, станьте нашим партнером и получите премиальные услуги</p>
            </div>
        </div>



        <History />

    </div>
)
}

export default Home;