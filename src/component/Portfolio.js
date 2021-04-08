import React from 'react'
import netflix from '../images/netflix.jpg'
import daraz from '../images/daraz.png'
import chess from '../images/chess.png'
import ukulele from '../images/ukulele.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css"


const Portfolio = () => {

    //Netflix
    const openPopupBoxNetflix = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox pb-3"src={netflix} alt="Netflex Project Dummy" />
                <p>It is a long established fact that a reader will be distracted</p>
                <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("https://github.com/mdrafeul/portfolio_project")}>
                    https://github.com/mdrafeul/portfolio_project</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix Project Dummy image"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Daraz
    const openPopupBoxDaraz = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox pb-3"src={daraz} alt="Netflex Project Dummy" />
                <p>It is a long established fact that a reader will be distracted</p>
                <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("https://github.com/mdrafeul/portfolio_project")}>
                    https://github.com/mdrafeul/portfolio_project</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigDaraz = {
        titleBar: {
            enable: true,
            text:"Daraz Project Dummy image"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    //Chess
    const openPopupBoxChess = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox pb-3"src={chess} alt="Netflex Project Dummy" />
                <p>It is a long established fact that a reader will be distracted</p>
                <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("https://github.com/mdrafeul/portfolio_project")}>
                    https://github.com/mdrafeul/portfolio_project</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigChess = {
        titleBar: {
            enable: true,
            text: "Chess Project Dummy image"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    //Ukulele
    const openPopupBoxUkulele = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox pb-3"src={ukulele} alt="Netflex Project Dummy" />
                <p>It is a long established fact that a reader will be distracted</p>
                <b>GitHub</b> <a className="hyper-link" onClick={() => window.open("https://github.com/mdrafeul/portfolio_project")}>
                    https://github.com/mdrafeul/portfolio_project</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigUkulele = {
        titleBar: {
            enable: true,
            text: "Ukulele Project Dummy image"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupBoxNetflix} >
                        <img className="portfolio-image" src={netflix} alt="Netflex Project Dummy" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    {/* -- */}
                    <div className="portfolio-image-box" onClick={openPopupBoxDaraz}>
                        <img className="portfolio-image" src={daraz} alt="Daraz Project Dummy" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    {/* -- */}
                    <div className="portfolio-image-box" onClick={openPopupBoxChess}>
                        <img className="portfolio-image" src={chess} alt="Chess Project Dummy" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                    {/* .. */}
                    <div className="portfolio-image-box" onClick={openPopupBoxUkulele}>
                        <img className="portfolio-image" src={ukulele} alt="Ukulele Project Dummy" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div>
            </div>
            <PopupboxContainer{...popupboxConfigNetflix} />
            <PopupboxContainer{...popupboxConfigDaraz} />
            <PopupboxContainer{...popupboxConfigUkulele} />
            <PopupboxContainer{...popupboxConfigChess}/>
                
            
        </div>
    )
}

export default Portfolio
