import React from "react";
import { useGetCommitsQuery } from "../redux";
import CommitsCell from "./CommitsCell";
import style from "../Styles/commitsTable.module.css"


const CommitsTable = () => {


    const {data = [], isLoading} = useGetCommitsQuery()
    if(isLoading) return <h2>Loading...</h2>


    const today = new Date()
    let dayNumber = today.getDay() 
    const dayGap = 3600 * 24000
    const prevDays = []
    const nextDays = []
    
    if(dayNumber === 0) {
        dayNumber = 7 
    }
    for(let i = 1; i <= 7 - dayNumber; i++) {
        nextDays.push(new Date(today.getTime() + i * dayGap))
    }

    for(let i = 0; i < 357 - 7 + dayNumber ; i++) {
        prevDays.push(new Date(today.getTime() - i * dayGap))
    }
    
    
    let cellArr = nextDays.reverse().concat(prevDays)
    cellArr = cellArr.reverse()

 

    return (
        <div className={style.commitsTable}>
            {cellArr.map(day => <CommitsCell commits={data} key={day.getTime()} day={day}/>)}
        </div>
    )
}

export default CommitsTable