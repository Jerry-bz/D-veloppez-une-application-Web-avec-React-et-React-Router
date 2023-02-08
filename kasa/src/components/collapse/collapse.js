import './collapse.css'
import logoArrowDown from '../../assets/logo/logo_arrowDown.svg'
import logoArrowUp from '../../assets/logo/logo_arrowUp.svg'
import React, { useState } from 'react';

/**
 * Affiche la Collapse avec l'utilisation de hooks d'etats
 * @component - Collapse
 */
export default function Collapse({ title, description }) {

    const [img, setImage] = useState(logoArrowDown)
    const [text, setText] = useState('collapse-text-none')

    return (
        <>
            <article className="collapse">
                <div onClick= {() => {
                                        img === logoArrowDown && setImage(() => logoArrowUp);
                                        img === logoArrowUp && setImage(() => logoArrowDown);
                                        text === 'collapse-text-none' && setText(() => 'collapse-text');
                                        text === 'collapse-text' && setText(() => 'collapse-text-none');
                                    }
                                } className="collapse-container-title" >
                
                
                    <h3 className="collapse-title">{title}</h3>
                    <img className="collapse-logo-arrow" src={img} alt="logo-arrow-down"></img>
                </div>
                <div className={text}>{description}</div>
            </article>
        </>
    )
}
