import React from "react";
import style from "../Styles/daysColumn.module.css"

const DaysColumn = () => {
    return (
        <div className={style.column}>
            <div className={style.day}>Пн</div>
            <div className={style.day}>Ср</div>
            <div className={style.day}>Пт</div>
        </div>
    )
}
export default DaysColumn