import React, {useState} from 'react'
import './History.scss';
import meeting2 from '../../../assets/images/meeting2.png';
import rightArrow from '../../../assets/images/rightArrow.png';
import leftArrow from '../../../assets/images/leftArrow.png';
import box from '../../../assets/images/box.png';

// import { useTranslation } from 'react-i18next';

const History = () => {

    // const { t } = useTranslation();

    const [state, setState] = useState({
        activeObject: {
           year: 2018,
           text: `начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.`
        },
        objects: [
            {
                year: 2017,
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, veniam? Quo doloremque unde consectetur eligendi itaque eum enim odio aperiam eius sunt rem repudiandae, commodi consequatur asperiores dicta delectus tempore!' 
            },
            {
               year: 2018,
               text: 'начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.' 
            },
            {
               year: 2019,
               text: 'деятельности корпоративного питания и инженерно-технической эксплуатации По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.' 
            },
            {
               year: 2020,
               text: 'корпоративного питания и инженерно-технической эксплуатации По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.' 
            },
            {
               year: 2021,
               text: 'и инженерно-технической эксплуатации По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.' 
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
    <div className="section-five">
        <div className='section-five__wrapper'>
            <div className="section-five__wrapper__left">
                <img className="section-five__wrapper__left__logo" src={box} alt="logo" />
                <h1>История</h1>
                <img className="section-five__wrapper__left__meet" src={meeting2} alt="meeting" />
            </div>

            <div className="section-five__wrapper__right">
                <div className="section-five__wrapper__right__pointer">
                    <button onClick={goLeft} className="section-five__wrapper__right__pointer-left"><img src={leftArrow} alt="leftArrow" /></button>
                    <button onClick={goRight} className="section-five__wrapper__right__pointer-right"><img src={rightArrow} alt="rightArrow" /></button>
                </div>
                <h1>{state.activeObject.year}</h1>
                <p>{state.activeObject.text}</p>
                <div className="section-five__wrapper__right__dates">
                    {state.objects.map((element, index) => (
                        <h1 key={index} onClick={(e) => contentHandler(e, index)} className={toggleActive(index)}>{element.year}</h1>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default History