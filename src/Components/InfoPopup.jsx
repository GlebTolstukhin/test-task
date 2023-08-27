import React, { useRef } from "react";
import style from "../Styles/infoPopup.module.css"


const InfoPopup = ({commitsNumber, day, handleInfoVisible}) => {


    const dayOfweek = new Date(day).getDay()
    const monthNumber = new Date(day).getMonth()
    const dayNumber = new Date(day).getDate()
    const year = new Date(day).getFullYear()

    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ]

    const popupRef = useRef()

    function closePopup(e) {
        if(e.target !== popupRef.current) {
            handleInfoVisible(false)
        }
    }

    return (
            <div ref={popupRef} className={style.main}>
                <div className={style.commitsNumber}>{commitsNumber ? commitsNumber : "No"} contributions</div>
                <div className={style.commitsData}>
                    <span>{days[dayOfweek]}, </span>
                    <span>{months[monthNumber]} </span>
                    <span>{[dayNumber]}, </span>
                    <span>{year}</span>    
                </div>
                <div className={style.triangle}></div>
                <div className={style.closeArea} onClick={(e) => closePopup(e)}></div>
            </div>
        
    )
}

export default InfoPopup