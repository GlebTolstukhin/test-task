import React from "react";
import { useState, useEffect } from "react";
import style from "../Styles/commitsCell.module.css"
import InfoPopup from "./InfoPopup";
import MonthName from "./MonthName";


const CommitsCell = ({day, commits}) => {

    const commitsArr = Object.keys(commits)
    const [commitsStyle, setCommitsStyle] = useState(style.cell)
    const [commitsNumber, setCommitsNumber] = useState(0)
    const [infoVisible, setInfoVisible] = useState(false)
    const [isFirstDay, setFirstDay] = useState(false)
    
    let commitsNumberTemp = 0

    useEffect(() => {
        setCommitsNumber(commitsNumberTemp)
    }, [commitsNumberTemp])

    useEffect(() => {
        if (commitsNumber === 0) {
            setCommitsStyle(style.empty)
        } else if (commitsNumber < 9) {
            setCommitsStyle(style.small)
        } else if(commitsNumber < 19) {
            setCommitsStyle(style.medium)
        } else if(commitsNumber < 29) {
            setCommitsStyle(style.large)
        } else if(commitsNumber > 30) {
            setCommitsStyle(style.veryLarge)
        }
    }, [commitsNumber])

    useEffect(() => {
        const dayNumber = new Date(day).getDate()
        if (dayNumber === 15) {
            setFirstDay(true)
        }
    }, [day])



   for(let i = 0; i < commitsArr.length; i++) {
        let searchingDate = new Date(commitsArr[i])
    
        if(day.toDateString() === searchingDate.toDateString()) {
            commitsNumberTemp = commits[commitsArr[i]]
        }
   }

   

   function handleInfoVisible() {
        setInfoVisible(!infoVisible)
   }


    return (
        <div className={`${commitsStyle} ${style.base} ${infoVisible ? style.active : null}`} onClick={handleInfoVisible}>
            {infoVisible ? <InfoPopup handleInfoVisible={handleInfoVisible} commitsNumber={commitsNumber} day={day} /> : null  }
            {isFirstDay ? <MonthName day={day}/> : null }
        </div>
    )
}
export default CommitsCell