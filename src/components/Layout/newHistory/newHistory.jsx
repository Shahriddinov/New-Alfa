import React, {useState} from 'react';
import './newHistory.scss';
import meeting2 from '../../../assets/images/meeting2.png';
import rightArrow from '../../../assets/images/rightArrow.png';
import leftArrow from '../../../assets/images/leftArrow.png';
import box from '../../../assets/images/box.png';

import { useTranslation } from 'react-i18next';

const NewHistory = () => {

    const { t } = useTranslation();

    const [state, setState] = useState({
        activeObject: {
           year: 2018,
           text: `${t("historyComponent.history2018")}`
        },
        objects: [
            {
                year: 2017,
                text: `${t("historyComponent.history2017")}` 
            },
            {
               year: 2018,
               text: `${t("historyComponent.history2018")}`  
            },
            {
               year: 2019,
               text: `${t("historyComponent.history2019")}` 
            },
            {
               year: 2020,
               text: `${t("historyComponent.history2020")}` 
            },
            {
               year: 2021,
               text: `${t("historyComponent.history2021")}` 
            }
        ]
    })



  

    const contentHandler = (e,index) => {
        e.preventDefault();
        setState( prev => {
            return {...prev, activeObject: state.objects[index]}
        })
    }

    

    const toggleActive = (index) => {

        if (state.objects[index].year === state.activeObject.year) {
            return 'active'
        }
        return ''
    }

    const goLeft = () => {
         state.objects.forEach( (elem, index) => {
          if(elem.year === state.activeObject.year){
              setState( prev => {
                  return {...prev, activeObject: state.objects[index === 0 ? 4: index - 1]}
              })
          }
        })
    }

    const goRight = () => {
        state.objects.forEach( (elem, index) => {
         if(elem.year === state.activeObject.year){
             setState( prev => {
                 return {...prev, activeObject: state.objects[index === 4 ? 0: index + 1]}
             })
         }
       })
   }



  return (
    <div className="history-container">
        <div className='history-container-top'>
            <div className='history-container-top__left'>
                <img  src={box} alt="logo" />
                <h1>{t("historyComponent.history")}</h1>
            </div>
            <div className='history-container-top__right'>
                <button onClick={goLeft}><img src={leftArrow} alt="leftArrow" /></button>
                <button onClick={goRight}><img src={rightArrow} alt="rightArrow" /></button>
            </div>
        </div>

        <div className='history-container-bottom'>
            <img src={meeting2} alt="meeting" />
            <div className='history-container-bottom__right'>
                <h1>{state.activeObject.year}</h1>
                <p>{state.activeObject.text}</p>
                <div className="history-container-bottom__right-years">
                    {state.objects.map((element, index) => (
                        <h1 key={index} onClick={(e) => contentHandler(e, index)} className={toggleActive(index)}>{element.year}</h1>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}

export default NewHistory