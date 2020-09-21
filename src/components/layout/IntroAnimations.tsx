import React, { useEffect } from 'react'
import gsap from "gsap";
import './IntroAnimations.css'

const IntroAnimations = () => {
    useEffect(() => {
        const tl = gsap.timeline({ default: { ease: 'power1.out' } });
        gsap.to(".intro-text span", { y: "0%", duration: 1, stagger: 0.25 });
        gsap.to(".intro-slider", { y: "-100%", duration: 1.5, delay: 1.5 });
        gsap.to(".intro-container", { y: "-100%", duration: 1.3, delay: 1.7 });
    }, [])

    return (
        <React.Fragment>
            <div className="intro-container">
                <div className="intro-text">
                    <span>Tasty</span>
                </div>

                <div className="intro-text">
                    <span>Crunchy</span>
                </div>

                <div className="intro-text">
                    <span>Crispy Union</span>
                </div>
            </div>
            <div className="intro-slider"></div>
        </React.Fragment>
    )
}

export default IntroAnimations
