import React from 'react'
import './History.scss';
import meeting2 from '../../../assets/images/meeting2.png';
import rightArrow from '../../../assets/images/rightArrow.png';
import leftArrow from '../../../assets/images/leftArrow.png';
import box from '../../../assets/images/box.png';

const History = () => {
  return (
    <div className="section-five">
        <div className="section-five__left">
            <img className="section-five__left__logo" src={box} alt="logo" />
            <h1>История</h1>
            <img className="section-five__left__meet" src={meeting2} alt="meeting" />
        </div>

        <div className="section-five__right">
            <div className="section-five__right__pointer">
                <button className="section-five__right__pointer-left"><img src={leftArrow} alt="leftArrow" /></button>
                <button className="section-five__right__pointer-right"><img src={rightArrow} alt="rightArrow" /></button>
            </div>
            <h1>2018</h1>
            <p>начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации <br/> По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.</p>
            <div className="section-five__right__dates">
                <h1 className="section-five__right__dates-1">2017</h1>     
                <h1 className="section-five__right__dates-2">2018</h1>     
                <h1 className="section-five__right__dates-3">2019</h1>     
                <h1 className="section-five__right__dates-4">2020</h1>     
                <h1 className="section-five__right__dates-5">2021</h1>     
            </div>
        </div>
    </div>
  )
}

export default History