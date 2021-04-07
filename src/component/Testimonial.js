import React from 'react'
import TestimonialsCarousel from './TestimonialsCarousel'
const Testimonial = () => {
    return (
        <div className="testimonials">
            <h1>my happy client</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
