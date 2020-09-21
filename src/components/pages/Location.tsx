import React from 'react'

const Location = () => {
    return (
        <React.Fragment>
            <div className="flex-container">
                <h2>Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.315970680394!2d103.7912521!3d1.275969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b4e1b82096512cd!2sCrispy%20Union!5e0!3m2!1sen!2ssg!4v1600688489720!5m2!1sen!2ssg"
                    title="Crispy Union"
                    width="600"
                    height="450"
                    frameBorder="0"
                    allowFullScreen={true}
                    aria-hidden="false"
                    tabIndex={0}>
                </iframe>
            </div>
        </React.Fragment>
    )
}

export default Location
