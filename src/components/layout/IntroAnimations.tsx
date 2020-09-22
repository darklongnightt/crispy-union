import React, { useEffect } from 'react'
import gsap from "gsap";
import './IntroAnimations.css'

const IntroAnimations = () => {
    useEffect(() => {
        const tl = gsap.timeline({ default: { ease: 'power1.out' } });
        tl.to(".intro-text span", { y: "0%", duration: 1, stagger: 0.25 });
        tl.to(".intro-slider", { y: "-100%", duration: 1.5, delay: 0.5 });
        tl.to(".intro-container", { y: "-100%", duration: 0.8 }, "-=1.5");
        tl.fromTo(".navbar", { x: "-100%" }, { x: "0%", duration: 0.5 }, "-=1");
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
