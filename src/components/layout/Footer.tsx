import React from 'react'
import './Footer.css'
import info from '../../crispyUnion.json'

const Footer = () => {
    return (
        <React.Fragment>
            <hr />
            <div className="footer-container">
                <div className="brand">{info["company"]}</div>
                <div className="address">
                    {info["address-line-1"]} <br /> {info["address-line-2"]}
                </div>
                <div className="social">
                    <a href={info["facebook-link"]} target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/doodle/96/000000/facebook-new.png" alt="" />
                    </a>
                    <a href={info["instagram-link"]} target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/doodle/96/000000/instagram-new.png" alt="" />
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
