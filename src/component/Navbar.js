import React from 'react'
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" href="#">Hi There</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" offset={-100} href="#" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth= {true} to="about" offset={-106} className="nav-link" href="#">about me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth= {true} to="service" offset={-60} className="nav-link" href="#">service</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-60} className="nav-link" href="#">experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth= {true} to="portfolio" offset={-60} className="nav-link" href="#">portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth= {true} to="contact" offset={-40} className="nav-link" href="#">contact</Link>
                        </li>
                    </ul>                
                </div>
            </div>
        </nav>
    )
}

export default Navbar
