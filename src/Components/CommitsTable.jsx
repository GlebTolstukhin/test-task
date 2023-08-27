import React, {useState, useEffect} from "react";
import CommitsCell from "./CommitsCell";
// import { useGetCommitsQuery } from "../redux";
import style from "../Styles/commitsTable.module.css"


const CommitsTable = () => {


    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://dpg.gg/test/calendar.json')
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .then(data => {
                setData(data)
            })
            .catch(e => {
                console.lor(e)
            })
    }, [])

    // if(isLoading) return <h2>Loading...</h2>


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