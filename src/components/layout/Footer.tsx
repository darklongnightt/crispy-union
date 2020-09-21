import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <React.Fragment>
            <hr />
            <div className="footer-container">
                <div className="brand">Crispy Union</div>
                <div className="address">
                    Pasir Panjang Food Centre, 121 Pasir Panjang Rd <br /> #01-12, Singapore 118543
                </div>
                <div className="social">
                    <a href="https://www.instagram.com/crispyunion/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/doodle/96/000000/facebook-new.png" alt="" />
                    </a>
                    <a href="https://www.facebook.com/crispyunion" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/doodle/96/000000/instagram-new.png" alt="" />
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
