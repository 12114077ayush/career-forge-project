// import React, { useState } from 'react';
import { useState } from 'react';
import './Carousel.scss'; // Import SCSS file for styling

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, text: "Career Forge provides users with insights into current placement trends across various industries and job roles." },
        { id: 2, text: "Career Forge helps users navigate the complex process of studying for and passing engineering exams, ultimately increasing their chances of success in their chosen field." },
        { id: 3, text: "The website offers a wide range of general interview questions commonly asked by employers, along with expert advice on how to answer them effectively." }
    ];



    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className='carousel'>
            <div className="carousel-container">
                <p className='slideheader'>What We Do</p>
                <div className="carousel">
                    <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map(slide => (
                            <div key={slide.id} className="slide">
                                <p>{slide.text}</p>
                            </div>
                        ))}
                    </div>
                    <button className="prev" onClick={prevSlide}>Prev</button>
                    <button className="next" onClick={nextSlide}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
