import React from "react";
import style from "../Styles/supportInfo.module.css"
import SupportCell from "./SupportCell";

const SupportInfo = () => {

    return (
        <div className={style.mainRow}>
            <div className={style.word}>Меньше</div>
            <div className={style.cellRow}>
                <SupportCell className={style.empty} number={""}/>
                <SupportCell className={style.small} number={"1-9"}/>
                <SupportCell className={style.medium} number={"10-19"}/>
                <SupportCell className={style.large} number={"20-29"}/>
                <SupportCell className={style.veryLarge} number={"30"}/>
            </div>
            <div className={style.word}>Больше</div>
        </div>
    )
}

export default SupportInfo