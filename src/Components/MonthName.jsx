import React from "react";
import style from "../Styles/monthName.module.css"


const MonthName = ({day}) => {

    const dayNumber = new Date(day).getDay()
    const monthNumber = new Date(day).getMonth()

    const months = [
        'Янв.',
        'Февр.',
        'Март',
        'Апр.',
        'Май',
        'Июнь',
        'Июль',
        'Авг.',
        'Сент.',
        'Окт.',
        'Нояб.',
        'Дек.'
    ]

    let toUp

    if (dayNumber === 1) {
        toUp = 20
    } else if (dayNumber === 2) {
        toUp = 37
    } else if (dayNumber === 3) {
        toUp = 54
    } else if (dayNumber === 4) {
        toUp = 71
    } else if (dayNumber === 5) {
        toUp = 88
    } else if (dayNumber === 6) {
        toUp = 105
    } else {
        toUp = 122
    }


    return (
        <div className={style.monthName} style={{top: `-${toUp}px`}}>
           {months[monthNumber]}
        </div>
    )
}
export default MonthName