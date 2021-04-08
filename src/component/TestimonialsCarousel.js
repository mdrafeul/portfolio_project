import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import avatar1 from '../images/avatar-1.png'
import avatar2 from '../images/avatar-2.png'
import avatar3 from '../images/avatar-3.png'
import avatar4 from '../images/avatar-4.png'

const TestimonialsCarousel = () => {
    return (

        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval= {4000}

        >
            <>
                
                <img src={avatar1} alt="Mr. X" />
                <div className="myCarousel">
                    <h3>Mr X</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, culpa!</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="Ms. Y" />
                <div className="myCarousel">                    
                    <h3>Ms. Y</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, asperiores.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="Kamal" />
                <div className="myCarousel">                    
                    <h3>Kamal</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, fugiat!</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="Raman" />
                <div className="myCarousel">                        
                        <h3>Raman</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quis?</p>
                </div>                
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
