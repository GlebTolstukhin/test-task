import React, { useState } from "react";
import SupportPoup from "./SupportPopup";


const SupportCell = ({className, number}) => {


    const [hovered, setHovered] = useState(false)

    function handleHover() {
        setHovered(!hovered)
    }


    return (
        <div className={className} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            {hovered ? <SupportPoup number={number}/> : null}
        </div>
    )
}
export default SupportCell