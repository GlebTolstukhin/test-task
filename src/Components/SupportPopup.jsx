import React from "react";
import style from '../Styles/supportPopup.module.css'

const SupportPoup = ({number}) => {
    return (
        <div className={style.main}>
            <div className={style.commitsNumber}>{number ? number : "No"} contributions</div>
            <div className={style.triangle}></div>
        </div>
    )
}
export default SupportPoup