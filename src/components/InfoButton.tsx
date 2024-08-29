import React from 'react';
import infoIcon from "../assets/icons8-info-50.png"

function InfoButton(props) {
    return (
        <summary role="button"
        ><img src={infoIcon}/>
        </summary>
    );
}

export default InfoButton;